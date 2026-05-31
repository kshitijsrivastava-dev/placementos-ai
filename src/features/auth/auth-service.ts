import { supabase } from "@/lib/supabase";
import type { Profile } from "./auth-types";

export type CreateProfileInput = {
  id: string;
  full_name: string;
  email: string;
};

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
  });
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getSession() {
  return supabase.auth.getSession();
}

export async function createProfile(input: CreateProfileInput) {
  return supabase.from("profiles").insert({
    id: input.id,
    full_name: input.full_name,
    email: input.email,
  });
}

export async function getProfile(userId: string) {
  return supabase.from("profiles").select("*").eq("id", userId).maybeSingle<Profile>();
}

const PROFILE_DUPLICATE_KEY_CODE = "23505";

/** Returns an existing profile or creates a minimal row for authenticated users without one. */
export async function ensureProfile(input: { id: string; email: string }) {
  const { data: existing, error: fetchError } = await getProfile(input.id);

  if (fetchError) {
    return { data: null as Profile | null, error: fetchError };
  }

  if (existing) {
    return { data: existing, error: null };
  }

  const { error: insertError } = await createProfile({
    id: input.id,
    email: input.email,
    full_name: "",
  });

  if (insertError) {
    if (insertError.code === PROFILE_DUPLICATE_KEY_CODE) {
      return getProfile(input.id);
    }

    return { data: null as Profile | null, error: insertError };
  }

  return getProfile(input.id);
}

export type UpdateProfileInput = {
  id: string;
  full_name: string;
};

export async function updateProfile(input: UpdateProfileInput) {
  return supabase
    .from("profiles")
    .update({ full_name: input.full_name })
    .eq("id", input.id)
    .select()
    .maybeSingle<Profile>();
}

export function getProfileDisplayName(profile: Profile | null, email: string): string {
  const name = profile?.full_name?.trim();
  if (name) {
    return name;
  }

  return email;
}

export function getProfileInitials(profile: Profile | null, email: string): string {
  const name = profile?.full_name?.trim();
  if (name) {
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  }

  const localPart = email.split("@")[0]?.trim() ?? "";
  return (localPart.slice(0, 2) || "??").toUpperCase();
}

export function getProfileFirstName(profile: Profile | null, email: string): string {
  const first = profile?.full_name?.trim().split(/\s+/)[0];
  if (first) {
    return first;
  }

  const localPart = email.split("@")[0]?.trim();
  if (localPart) {
    return localPart;
  }

  return "there";
}

export function getTimeOfDayGreeting(date = new Date()): string {
  const hour = date.getHours();
  if (hour < 12) {
    return "Good morning";
  }
  if (hour < 17) {
    return "Good afternoon";
  }
  return "Good evening";
}

export function getOverviewGreeting(profile: Profile | null, email: string, date = new Date()): string {
  return `${getTimeOfDayGreeting(date)}, ${getProfileFirstName(profile, email)}.`;
}
