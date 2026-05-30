import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./use-auth";

export function ProtectedRoute({
  children,
}: {
  children: ReactNode;
}) {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}