import { useEffect, useState, type FormEvent } from "react";
import { Card } from "@/components/dashboard/Card";
import { DashboardPage } from "@/components/dashboard/page/DashboardPage";
import { DashboardPageHeader } from "@/components/dashboard/page/DashboardPageHeader";
import { AuthInput } from "@/components/auth/AuthShell";
import { updateProfile } from "@/features/auth/auth-service";
import { useAuth } from "@/features/auth/use-auth";

function Settings() {
  const { user, profile, refreshProfile } = useAuth();
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFullName(profile?.full_name?.trim() ?? "");
  }, [profile?.full_name]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) {
      return;
    }

    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    const trimmedName = fullName.trim();
    const { data, error: updateError } = await updateProfile({
      id: user.id,
      full_name: trimmedName,
    });

    setIsSubmitting(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    if (data) {
      await refreshProfile();
    }

    setSuccess("Profile saved.");
  }

  const accountEmail = profile?.email?.trim() || user?.email || "";

  return (
    <DashboardPage maxWidth="5xl">
      <DashboardPageHeader
        eyebrow="// SETTINGS"
        title="Profile settings"
        description="Update how your name appears across PlacementOS."
      />

      <Card title="Profile" subtitle="Account details">
        <form onSubmit={handleSubmit} className="max-w-md">
          {error ? (
            <p className="text-sm text-destructive mb-4" role="alert">
              {error}
            </p>
          ) : null}
          {success ? (
            <p className="text-sm text-success mb-4" role="status">
              {success}
            </p>
          ) : null}

          <AuthInput
            label="Full name"
            placeholder="Your full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            disabled={isSubmitting}
            autoComplete="name"
          />

          <label className="block mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5 block">
              Email
            </span>
            <input
              type="email"
              value={accountEmail}
              readOnly
              disabled
              className="w-full px-4 py-3 rounded-xl bg-subtle border border-border text-sm text-muted-foreground cursor-not-allowed"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 touch-manipulation min-h-11 sm:min-h-0"
          >
            {isSubmitting ? "Saving…" : "Save changes"}
          </button>
        </form>
      </Card>
    </DashboardPage>
  );
}

export default Settings;
