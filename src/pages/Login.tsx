import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell, AuthInput } from "@/components/auth/AuthShell";
import { signIn } from "@/features/auth/auth-service";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { error: signInError } = await signIn(email, password);

    setIsSubmitting(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    navigate("/dashboard");
  }

  return (
    <AuthShell
      title="Sign in to PlacementOS"
      subtitle="Pick up where you left off in your prep workspace."
      footer={<>New here? <Link to="/signup" className="text-primary font-semibold">Create an account</Link></>}
    >
      <form onSubmit={handleSubmit}>
        {error ? (
          <p className="text-sm text-destructive mb-4" role="alert">
            {error}
          </p>
        ) : null}
        <AuthInput
          label="Email"
          type="email"
          placeholder="you@university.edu"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={isSubmitting}
          autoComplete="email"
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          disabled={isSubmitting}
          autoComplete="current-password"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? "Signing in…" : "Sign in →"}
        </button>
      </form>
      <button
        type="button"
        disabled={isSubmitting}
        className="w-full mt-3 py-3 bg-surface border border-border rounded-xl font-semibold text-sm hover:bg-surface-hover disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue with Google
      </button>
    </AuthShell>
  );
}

export default Login;
