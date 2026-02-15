import { Sidebar } from '@/components/layout/sidebar';
import { DashboardView } from '@/features/dashboard/dashboard-view';

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-4 lg:p-10">
      <div className="panel-grid mx-auto max-w-[1400px] overflow-hidden rounded-4xl shadow-card">
        <Sidebar />
        <DashboardView />
      </div>
    </main>
  );
}
