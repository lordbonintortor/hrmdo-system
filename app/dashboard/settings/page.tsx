import { Check, ImageIcon, LockKeyhole, Mail, Save, ShieldCheck, UserRound } from "lucide-react";
import { AdminShell } from "../_components/admin-shell";

const accessItems = [
  { label: "Dashboard", enabled: true },
  { label: "Linked Process", enabled: true },
  { label: "Data Analytics", enabled: true },
  { label: "Data Submission", enabled: true },
  { label: "Settings", enabled: true },
  { label: "HR Programs", enabled: false }
];

export default function SettingsPage() {
  return (
    <AdminShell
      activePage="Settings"
      title="Settings"
      description="Manage portal preferences and administrative options."
    >
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm">
          <div className="border-b border-civic-forest/10 pb-4">
            <h2 className="text-base font-semibold text-civic-ink">Office Profile</h2>
            <p className="mt-1 text-sm text-civic-ink/55">Basic identity shown across the HRMDO portal.</p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-civic-ink/75">Office Name</span>
              <input
                type="text"
                defaultValue="Human Resource Management and Development Office"
                className="mt-1 h-11 w-full rounded-md border border-civic-forest/15 bg-white px-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-civic-ink/75">Short Name</span>
              <input
                type="text"
                defaultValue="HRMDO"
                className="mt-1 h-11 w-full rounded-md border border-civic-forest/15 bg-white px-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-civic-ink/75">Office Email</span>
              <div className="mt-1 flex h-11 items-center gap-2 rounded-md border border-civic-forest/15 bg-white px-3">
                <Mail size={17} className="text-civic-ink/45" aria-hidden="true" />
                <input
                  type="email"
                  placeholder="hrmdo@example.edu.ph"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-civic-ink/75">Administrator Role</span>
              <div className="mt-1 flex h-11 items-center gap-2 rounded-md border border-civic-forest/15 bg-civic-gold/50 px-3 text-sm font-medium text-civic-ink">
                <ShieldCheck size={17} className="text-civic-forest" aria-hidden="true" />
                Admin 2 - Overall Control
              </div>
            </label>
          </div>
        </section>

        <aside className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/hrmdo-logo.png" alt="HRMDO seal" className="size-14 shrink-0" />
            <div>
              <h2 className="text-base font-semibold text-civic-ink">Branding</h2>
              <p className="text-sm text-civic-ink/55">Current portal identity.</p>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-md border border-civic-forest/15 text-sm font-semibold text-civic-forest hover:bg-civic-mist"
          >
            <ImageIcon size={17} aria-hidden="true" />
            Change logo
          </button>
        </aside>

        <section className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="border-b border-civic-forest/10 pb-4">
            <h2 className="text-base font-semibold text-civic-ink">System Access</h2>
            <p className="mt-1 text-sm text-civic-ink/55">Modules currently available in the Admin 2 view.</p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {accessItems.map((item) => (
              <div
                key={item.label}
                className="flex min-h-12 items-center justify-between rounded-md border border-civic-forest/10 bg-civic-gold/45 px-4"
              >
                <span className="text-sm font-medium text-civic-ink">{item.label}</span>
                <span
                  className={`inline-flex h-7 items-center gap-1 rounded-md px-2 text-xs font-semibold ${
                    item.enabled ? "bg-civic-mist text-civic-forest" : "bg-white text-civic-ink/35"
                  }`}
                >
                  {item.enabled ? <Check size={14} aria-hidden="true" /> : <LockKeyhole size={14} aria-hidden="true" />}
                  {item.enabled ? "Enabled" : "Locked"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-civic-mist text-civic-forest">
                <UserRound size={18} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-civic-ink">Account Preferences</h2>
                <p className="text-sm text-civic-ink/55">Login and profile settings will connect once authentication is added.</p>
              </div>
            </div>

            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2 rounded-md bg-civic-forest px-4 text-sm font-semibold text-white hover:bg-civic-ink"
            >
              <Save size={17} aria-hidden="true" />
              Save changes
            </button>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
