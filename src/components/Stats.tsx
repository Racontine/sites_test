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
    <section className="bg-neutral-900 text-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-8 lg:p-10 group hover:bg-neutral-800 transition-colors"
            >
              <div className="text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                {s.k}
              </div>
              <div className="mt-4 text-sm font-medium text-white">{s.v}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.s}</div>
              <div className="mt-6 h-px w-8 bg-orange-500 group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
