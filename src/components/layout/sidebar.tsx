export function Sidebar() {
  const icons = ['⌁', '◌', '◴', '☷', '◍', '◫', '◎'];

  return (
    <aside className="rounded-l-4xl bg-panel-navy px-4 py-8 text-white lg:min-h-[860px]">
      <div className="mx-auto mb-10 h-14 w-14 rounded-2xl bg-white/10" />
      <nav className="space-y-4">
        {icons.map((icon, idx) => (
          <button
            key={icon}
            className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full text-lg transition ${
              idx === 2 ? 'bg-white/70 text-panel-navy' : 'text-white/80 hover:bg-white/10'
            }`}
            type="button"
          >
            {icon}
          </button>
        ))}
      </nav>
      <div className="mt-12 rounded-full bg-gradient-to-r from-[#ff9f54] via-[#ff4f87] to-[#8c6bff] p-1" />
    </aside>
  );
}
