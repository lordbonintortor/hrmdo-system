import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  FileStack,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Link2,
  LogOut,
  Menu,
  MessageSquareText,
  PhilippinePeso,
  Search,
  Settings,
  UsersRound
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Linked Process", icon: Link2 },
  { label: "Recruitment", icon: BriefcaseBusiness },
  { label: "Records Management", icon: FileStack },
  { label: "Human Development", icon: GraduationCap },
  { label: "Performance Management", icon: ClipboardCheck },
  { label: "Total Rewards", icon: PhilippinePeso },
  { label: "Data Analytics", icon: BarChart3 },
  { label: "Survey", icon: MessageSquareText },
  { label: "Calendar", icon: CalendarDays },
  { label: "Settings", icon: Settings }
];

const quickCards = [
  { label: "Recruitment", value: "Vacancy and application tracking" },
  { label: "Records Management", value: "Personnel records and HR documents" },
  { label: "Human Development", value: "Training and development programs" },
  { label: "Performance Management", value: "Performance cycles and review monitoring" },
  { label: "Total Rewards", value: "Benefits, incentives, and compensation references" },
  { label: "Data Analytics", value: "Reports, dashboards, and workforce insights" }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-civic-gold text-civic-ink">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-civic-forest/15 bg-white md:flex">
          <div className="border-b border-civic-forest/15 px-5 py-5">
            <div className="flex items-center gap-3">
              <img src="/hrmdo-logo.png" alt="HRMDO seal" className="size-11 shrink-0" />
              <div>
                <p className="font-semibold">HRMDO</p>
                <p className="text-xs text-civic-ink/55">Admin 2 View</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1 px-3 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href="#"
                  className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium ${
                    item.active
                      ? "bg-civic-mist text-civic-forest"
                      : "text-civic-ink/65 hover:bg-civic-gold hover:text-civic-ink"
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto px-3 py-4">
            <a
              href="/"
              className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-civic-ink/65 hover:bg-civic-gold hover:text-civic-ink"
            >
              <LogOut size={18} aria-hidden="true" />
              Log out
            </a>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-16 items-center justify-between border-b border-civic-forest/15 bg-white px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button type="button" className="flex size-9 items-center justify-center rounded-md border border-civic-forest/15 text-civic-ink/65 md:hidden">
                <Menu size={18} aria-hidden="true" />
              </button>
              <div>
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <p className="hidden text-sm text-civic-ink/55 sm:block">Overall control for all HRMDO modules.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" className="flex size-9 items-center justify-center rounded-md border border-civic-forest/15 text-civic-ink/65 hover:bg-civic-gold">
                <Search size={18} aria-hidden="true" />
              </button>
              <button type="button" className="flex size-9 items-center justify-center rounded-md border border-civic-forest/15 text-civic-ink/65 hover:bg-civic-gold">
                <Bell size={18} aria-hidden="true" />
              </button>
              <button type="button" className="flex size-9 items-center justify-center rounded-md border border-civic-forest/15 text-civic-ink/65 hover:bg-civic-gold">
                <Settings size={18} aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="p-4 sm:p-6">
            <section className="rounded-lg border border-civic-forest/15 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-2 border-b border-civic-forest/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold">Overview</h2>
                  <p className="text-sm text-civic-ink/55">Manage all HRMDO areas with Admin 2 access.</p>
                </div>
                <button type="button" className="h-9 rounded-md bg-civic-forest px-4 text-sm font-semibold text-white hover:bg-civic-ink">
                  New record
                </button>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {quickCards.map((card) => (
                  <article key={card.label} className="rounded-md border border-civic-forest/15 bg-civic-gold/45 p-4">
                    <h3 className="text-sm font-semibold text-civic-ink">{card.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-civic-ink/55">{card.value}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
