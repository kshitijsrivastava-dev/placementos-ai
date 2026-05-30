import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { getProfile } from "./auth-service";
import type { AuthState, AuthUser, Profile } from "./auth-types";

type AuthContextValue = AuthState;

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  profile: null,
  isLoading: true,
  isAuthenticated: false,
});

function mapAuthUser(user: User | null | undefined): AuthUser | null {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email ?? "",
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function syncAuthState(session: Session | null) {
      const authUser = mapAuthUser(session?.user);

      if (!authUser) {
        if (!cancelled) {
          setUser(null);
          setProfile(null);
          setIsLoading(false);
        }
        return;
      }

      if (!cancelled) {
        setUser(authUser);
      }

      const { data: profileData } = await getProfile(authUser.id);

      if (!cancelled) {
        setProfile(profileData);
        setIsLoading(false);
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoading(true);
      void syncAuthState(session);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      user,
      profile,
      isLoading,
      isAuthenticated: !!user,
    }),
    [user, profile, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
