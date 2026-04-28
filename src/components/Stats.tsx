import { useI18n } from "../i18n";

export function Stats() {
  const { t } = useI18n();
  const stats = [
    { k: "57+", v: t("stats.1.v"), s: t("stats.1.s") },
    { k: "30+", v: t("stats.2.v"), s: t("stats.2.s") },
    { k: "6", v: t("stats.3.v"), s: t("stats.3.s") },
    { k: "24h", v: t("stats.4.v"), s: t("stats.4.s") },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900 -z-10" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative p-8 lg:p-10 rounded-3xl border border-white/10 glass hover:bg-white/5 transition-all group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-9xl font-display font-black text-white/5 select-none transition-transform group-hover:scale-110">
                {i + 1}
              </div>
              <div className="relative">
                <div className="text-6xl lg:text-7xl font-display font-bold tracking-tight text-white">
                  {s.k}
                </div>
                <div className="mt-4 text-sm font-bold text-orange-500 uppercase tracking-widest">{s.v}</div>
                <div className="mt-1 text-xs text-neutral-400 font-medium">{s.s}</div>
                <div className="mt-8 h-1 w-12 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
