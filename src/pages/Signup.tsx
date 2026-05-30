import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell, AuthInput } from "@/components/auth/AuthShell";
import { createProfile, signUp } from "@/features/auth/auth-service";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { data, error: signUpError } = await signUp(email, password);

    if (signUpError) {
      setIsSubmitting(false);
      setError(signUpError.message);
      return;
    }

    if (data.user) {
      const { error: profileError } = await createProfile({
        id: data.user.id,
        full_name: fullName,
        email,
      });

      if (profileError) {
        setIsSubmitting(false);
        setError(profileError.message);
        return;
      }
    }

    setIsSubmitting(false);
    navigate("/login");
  }

  return (
    <AuthShell
      title="Create your PlacementOS account"
      subtitle="Free to start. Unlock pro modules as you progress."
      footer={<>Already have an account? <Link to="/login" className="text-primary font-semibold">Sign in</Link></>}
    >
      <form onSubmit={handleSubmit}>
        {error ? (
          <p className="text-sm text-destructive mb-4" role="alert">
            {error}
          </p>
        ) : null}
        <AuthInput
          label="Full Name"
          placeholder="Your full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
          disabled={isSubmitting}
          autoComplete="name"
        />
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
          placeholder="Min 8 chars"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          disabled={isSubmitting}
          autoComplete="new-password"
          minLength={8}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? "Creating account…" : "Create account →"}
        </button>
      </form>
      <p className="mt-4 text-[10px] text-muted-foreground font-mono leading-relaxed">
        By signing up you agree to the PlacementOS Terms and Privacy Policy. We do not sell your data.
      </p>
    </AuthShell>
  );
}

export default Signup;
