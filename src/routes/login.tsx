import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, AuthInput } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Sign in to your console"
      subtitle="Continue your launch sequence."
      footer={<>New here? <Link to="/signup" className="text-primary font-semibold">Create an account</Link></>}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/dashboard" });
        }}
      >
        <AuthInput label="Email" type="email" placeholder="you@university.edu" required />
        <AuthInput label="Password" type="password" placeholder="••••••••" required />
        <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform">
          Launch Console →
        </button>
      </form>
      <button className="w-full mt-3 py-3 bg-white/[0.03] border border-border rounded-xl font-semibold text-sm hover:bg-white/[0.06]">
        Continue with Google
      </button>
    </AuthShell>
  );
}