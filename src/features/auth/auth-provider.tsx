import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { AuthState, AuthUser } from "./auth-types";
import { getCurrentUser } from "./auth-service";

type AuthContextValue = AuthState;

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const currentUser = await getCurrentUser();

      if (currentUser) {
        setUser({
          id: currentUser.id,
          email: currentUser.email ?? "",
        });
      }

      setIsLoading(false);
    }

    loadUser();
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated: !!user,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}