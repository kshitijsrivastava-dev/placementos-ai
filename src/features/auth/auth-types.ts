export type AuthUser = {
  id: string;
  email: string;
};

export type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
};

export type AuthState = {
  user: AuthUser | null;
  profile: Profile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
};
