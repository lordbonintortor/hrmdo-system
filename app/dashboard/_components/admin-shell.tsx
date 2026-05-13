import Link from "next/link";
import type { ReactNode } from "react";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  FileUp,
  FileStack,
  GraduationCap,
  LayoutDashboard,
  Link2,
  LogOut,
  Menu,
  MessageSquareText,
  PhilippinePeso,
  Settings
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", accessible: true },
  { label: "Linked Process", icon: Link2, href: "/dashboard/linked-process", accessible: true },
  { label: "Data Analytics", icon: BarChart3, href: "/dashboard/data-analytics", accessible: true },
  { label: "Data Submission", icon: FileUp, href: "/dashboard/data-submission", accessible: true }
];

const utilityNavItems = [
  { label: "Survey", icon: MessageSquareText, accessible: false },
  { label: "Calendar", icon: CalendarDays, accessible: false },
  { label: "Settings", icon: Settings, accessible: false }
];

const hrProgramItems = [
  { label: "Recruitment", icon: BriefcaseBusiness },
  { label: "Records Management", icon: FileStack },
  { label: "Human Development", icon: GraduationCap },
  { label: "Performance Management", icon: ClipboardCheck },
  { label: "Total Rewards", icon: PhilippinePeso }
];

type AdminShellProps = {
  activePage: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function AdminShell({ activePage, title, description, children }: AdminShellProps) {
  return (
    <main className="min-h-screen bg-civic-gold text-civic-ink">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-civic-forest/15 bg-white md:flex">
          <div className="flex h-24 items-center border-b border-civic-forest/15 px-5">
            <div className="flex items-center gap-3">
              <img src="/hrmdo-logo.png" alt="HRMDO seal" className="size-12 shrink-0" />
              <div className="min-w-0">
                <p className="text-lg font-bold leading-6 text-civic-ink">HRMDO</p>
                <p className="text-xs font-medium text-civic-ink/55">Admin 2 View</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1 px-3 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.label === activePage;
              const itemClassName = `flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium ${
                isActive
                  ? "bg-civic-mist text-civic-forest"
                  : item.accessible
                    ? "text-civic-ink/65 hover:bg-civic-gold hover:text-civic-ink"
                    : "cursor-not-allowed text-civic-ink/30"
              }`;

              if (!item.accessible || !item.href) {
                return (
                  <span key={item.label} aria-disabled="true" className={itemClassName}>
                    <Icon size={18} aria-hidden="true" />
                    {item.label}
                  </span>
                );
              }

              return (
                <Link key={item.label} href={item.href} className={itemClassName}>
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}

            <details className="group">
              <summary className="flex h-10 cursor-pointer list-none items-center gap-3 rounded-md px-3 text-sm font-medium text-civic-ink/65 hover:bg-civic-gold hover:text-civic-ink">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                <span className="min-w-0 flex-1">HR Programs</span>
                <ChevronDown size={16} aria-hidden="true" className="transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-1 space-y-1 pl-6">
                {hrProgramItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <span
                      key={item.label}
                      aria-disabled="true"
                      className="flex h-9 cursor-not-allowed items-center gap-3 rounded-md px-3 text-sm font-medium text-civic-ink/30"
                    >
                      <Icon size={17} aria-hidden="true" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </details>

            {utilityNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.label === activePage;

              return (
                <span
                  key={item.label}
                  aria-disabled="true"
                  className={`flex h-10 cursor-not-allowed items-center gap-3 rounded-md px-3 text-sm font-medium ${
                    isActive ? "bg-civic-mist text-civic-forest" : "text-civic-ink/30"
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </span>
              );
            })}
          </nav>

          <div className="mt-auto px-3 py-4">
            <Link
              href="/"
              className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-civic-ink/65 hover:bg-civic-gold hover:text-civic-ink"
            >
              <LogOut size={18} aria-hidden="true" />
              Log out
            </Link>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="bg-civic-gold px-4 pt-4 sm:px-6">
            <div className="flex min-h-20 items-center justify-between rounded-lg border border-civic-forest/10 bg-white px-4 py-4 shadow-sm sm:px-5">
              <div className="flex min-w-0 items-center gap-4">
                <button type="button" className="flex size-10 items-center justify-center rounded-md border border-civic-forest/15 bg-civic-gold text-civic-ink/65 md:hidden">
                  <Menu size={18} aria-hidden="true" />
                </button>
                <div className="min-w-0 border-l-4 border-civic-forest pl-4">
                  <h1 className="truncate text-xl font-bold leading-7 text-civic-ink">{title}</h1>
                  <p className="hidden truncate text-sm text-civic-ink/55 sm:block">{description}</p>
                </div>
              </div>

              <button type="button" className="relative flex size-10 items-center justify-center rounded-md bg-civic-mist text-civic-forest hover:bg-civic-forest hover:text-white">
                <Bell size={18} aria-hidden="true" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-civic-coral" />
              </button>
            </div>
          </header>

          <div className="p-4 sm:p-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
