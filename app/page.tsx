import Link from "next/link";
import { LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-civic-gold px-4 py-10">
      <section className="w-full max-w-sm rounded-lg border border-civic-forest/15 bg-white p-6 shadow-soft">
        <div className="mb-6 text-center">
          <img src="/hrmdo-logo.png" alt="HRMDO seal" className="mx-auto mb-3 size-20" />
          <h1 className="text-xl font-semibold text-civic-ink">HRMDO Portal</h1>
          <p className="mt-1 text-sm leading-5 text-civic-ink/60">
            Human Resource Management and
            <br />
            Development Office
          </p>
        </div>

        <form className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-civic-ink/80">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 h-11 w-full rounded-md border border-civic-forest/20 px-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-civic-ink/80">Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 h-11 w-full rounded-md border border-civic-forest/20 px-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15"
            />
          </label>

          <Link
            href="/dashboard"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-civic-forest text-sm font-semibold text-white transition hover:bg-civic-ink"
          >
            <LockKeyhole size={17} aria-hidden="true" />
            Admin Login
          </Link>
        </form>

        <p className="mt-5 text-center text-xs text-civic-ink/55">Use office-issued account credentials.</p>
      </section>
    </main>
  );
}
