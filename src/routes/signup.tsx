import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, AuthInput } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Initialize your account"
      subtitle="Free forever. Pro features unlock as you progress."
      footer={<>Already deploying? <Link to="/login" className="text-primary font-semibold">Sign in</Link></>}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/dashboard" });
        }}
      >
        <AuthInput label="Full Name" placeholder="Alex Chen" required />
        <AuthInput label="Email" type="email" placeholder="you@university.edu" required />
        <AuthInput label="Password" type="password" placeholder="Min 8 chars" required />
        <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform">
          Deploy Account →
        </button>
      </form>
      <p className="mt-4 text-[10px] text-muted-foreground font-mono leading-relaxed">
        By signing up you agree to the PlacementOS Terms and Privacy Policy. We do not sell your data.
      </p>
    </AuthShell>
  );
}