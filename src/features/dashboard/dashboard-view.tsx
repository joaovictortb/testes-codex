'use client';

import { useQuery } from '@tanstack/react-query';

import { activity } from '@/features/dashboard/data';

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <article className={`rounded-[2rem] bg-white p-6 ${className}`}>{children}</article>;
}

export function DashboardView() {
  const { data } = useQuery({
    queryKey: ['activity'],
    queryFn: async () => activity,
    initialData: activity
  });

  return (
    <section className="space-y-6 rounded-r-4xl bg-panel-bg p-6 lg:p-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-5xl font-semibold text-slate-900">Analytics</h1>
        <div className="flex items-center gap-3">
          <input
            className="w-56 rounded-full bg-white px-4 py-2 text-sm outline-none"
            placeholder="Search"
            type="text"
          />
          <button className="rounded-full bg-panel-navy px-6 py-2 text-sm font-semibold text-white" type="button">
            New Company
          </button>
        </div>
      </header>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_1.1fr_1fr]">
        <Card className="bg-gradient-to-br from-panel-coral to-panel-magenta text-white">
          <p className="text-2xl">Total Likes</p>
          <p className="mt-2 text-6xl font-bold">23.0000K</p>
          <p className="mt-10 grid grid-cols-3 gap-2 text-sm text-white/90">
            <span>Female %20</span>
            <span>Male %50</span>
            <span>Other %30</span>
          </p>
        </Card>
        <Card>
          <p className="text-3xl font-semibold">Pending Messages 20.k</p>
          <div className="mt-8 flex h-44 items-center justify-center rounded-full border-8 border-[#f57f5f] border-t-panel-navy border-r-panel-magenta" />
        </Card>
        <div className="space-y-5">
          <Card>
            <p className="text-xl font-semibold">3.k Comments</p>
            <div className="mt-6 h-3 rounded-full bg-slate-200">
              <div className="h-3 w-2/5 rounded-full bg-gradient-to-r from-panel-magenta to-panel-coral" />
            </div>
          </Card>
          <Card>
            <p className="text-xl font-semibold">Post Stats</p>
            <div className="mt-4 grid h-40 grid-cols-7 items-end gap-2">
              {[2, 4, 3, 7, 4, 3, 4].map((h, i) => (
                <div key={i} className={`rounded-full ${i === 3 ? 'bg-panel-magenta' : 'bg-slate-300'}`} style={{ height: `${h * 20}px` }} />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">Completed Posts 874</p>
          </Card>
          <Card>
            <p className="text-xl font-semibold">10.k Links Shared</p>
            <div className="mt-6 h-3 rounded-full bg-slate-200">
              <div className="h-3 w-3/5 rounded-full bg-panel-navy" />
            </div>
          </Card>
        </div>
      </div>

      <Card className="bg-transparent p-0 shadow-none">
        <div className="rounded-[2rem] bg-white p-5">
          <h2 className="mb-4 text-3xl font-semibold">Post Activity</h2>
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.title} className="grid grid-cols-[1.4fr_0.6fr_0.4fr_0.4fr] items-center gap-3 rounded-2xl bg-panel-bg p-4">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.post}</p>
                </div>
                <p className="font-semibold">{item.category}</p>
                <p className="font-semibold">{item.views}</p>
                <p className={`${item.change.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>{item.change}</p>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
}
