import { useI18n } from "../i18n";

export function Sectors() {
  const { t } = useI18n();
  const sectors = [
    { name: t("sector.1.n"), icon: "⚙", d: t("sector.1.d") },
    { name: t("sector.2.n"), icon: "▲", d: t("sector.2.d") },
    { name: t("sector.3.n"), icon: "✦", d: t("sector.3.d") },
    { name: t("sector.4.n"), icon: "❀", d: t("sector.4.d") },
    { name: t("sector.5.n"), icon: "✺", d: t("sector.5.d") },
    { name: t("sector.6.n"), icon: "✚", d: t("sector.6.d") },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-8 bg-orange-600" />
              {t("sectors.kicker")}
            </div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              {t("sectors.title.1")}
              <br />
              <span className="italic font-serif font-light">{t("sectors.title.2")}</span>
            </h2>
          </div>
          <p className="lg:max-w-md text-neutral-600 leading-relaxed">
            {t("sectors.desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sectors.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-2xl bg-[#fafaf7] border border-neutral-200 p-6 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl text-orange-500 group-hover:text-orange-400">{s.icon}</span>
                <span className="text-xs uppercase tracking-wider opacity-50 group-hover:opacity-100">
                  {t("sector.label")}
                </span>
              </div>
              <div className="mt-10">
                <div className="text-xl font-semibold tracking-tight">{s.name}</div>
                <div className="text-sm mt-1 opacity-70">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
