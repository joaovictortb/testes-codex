import { cn } from '@/lib/utils';

export function AuthShell({
  title,
  subtitle,
  children,
  className
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="min-h-screen p-6 lg:p-10">
      <div
        className={cn(
          'mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-4xl bg-white shadow-card lg:grid-cols-[1.1fr_0.9fr]',
          className
        )}
      >
        <section className="auth-gradient flex flex-col justify-between p-8 text-white lg:p-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Admin suite</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight">{title}</h1>
            <p className="mt-4 max-w-sm text-white/85">{subtitle}</p>
          </div>
          <div className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-white/80">Pronto para integração futura com sua API, RBAC, billing e telemetria.</p>
          </div>
        </section>

        <section className="flex items-center justify-center bg-panel-bg p-8 lg:p-14">{children}</section>
      </div>
    </main>
  );
}
