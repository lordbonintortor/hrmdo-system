import { AdminShell } from "./_components/admin-shell";

export default function DashboardPage() {
  return (
    <AdminShell
      activePage="Dashboard"
      title="Dashboard"
      description="Overall control for all HRMDO modules."
    />
  );
}
