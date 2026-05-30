import { Link, useNavigate } from "react-router-dom";
import { AuthShell, AuthInput } from "@/components/auth/AuthShell";

function Signup() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Create your PlacementOS account"
      subtitle="Free to start. Unlock pro modules as you progress."
      footer={<>Already have an account? <Link to="/login" className="text-primary font-semibold">Sign in</Link></>}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard");
        }}
      >
        <AuthInput label="Full Name" placeholder="Alex Chen" required />
        <AuthInput label="Email" type="email" placeholder="you@university.edu" required />
        <AuthInput label="Password" type="password" placeholder="Min 8 chars" required />
        <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform">
          Create account →
        </button>
      </form>
      <p className="mt-4 text-[10px] text-muted-foreground font-mono leading-relaxed">
        By signing up you agree to the PlacementOS Terms and Privacy Policy. We do not sell your data.
      </p>
    </AuthShell>
  );
}

export default Signup;
