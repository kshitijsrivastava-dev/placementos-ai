import { Link, useNavigate } from "react-router-dom";
import { AuthShell, AuthInput } from "@/components/auth/AuthShell";

function Login() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Sign in to PlacementOS"
      subtitle="Pick up where you left off in your prep workspace."
      footer={<>New here? <Link to="/signup" className="text-primary font-semibold">Create an account</Link></>}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard");
        }}
      >
        <AuthInput label="Email" type="email" placeholder="you@university.edu" required />
        <AuthInput label="Password" type="password" placeholder="••••••••" required />
        <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform">
          Sign in →
        </button>
      </form>
      <button className="w-full mt-3 py-3 bg-surface border border-border rounded-xl font-semibold text-sm hover:bg-surface-hover">
        Continue with Google
      </button>
    </AuthShell>
  );
}

export default Login;
