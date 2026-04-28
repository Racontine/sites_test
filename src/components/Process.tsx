import { useI18n } from "../i18n";

export function Process() {
  const { t } = useI18n();
  const steps = [
    { n: "01", title: t("process.1.t"), d: t("process.1.d") },
    { n: "02", title: t("process.2.t"), d: t("process.2.d") },
    { n: "03", title: t("process.3.t"), d: t("process.3.d") },
    { n: "04", title: t("process.4.t"), d: t("process.4.d") },
    { n: "05", title: t("process.5.t"), d: t("process.5.d") },
  ];

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-600">
            <span className="h-px w-8 bg-orange-600" />
            {t("process.kicker")}
          </div>
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            {t("process.title")}
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            {t("process.desc")}
          </p>
        </div>

        <ol className="relative border-l border-neutral-200 ml-3">
          {steps.map((s) => (
            <li key={s.n} className="pl-8 pb-10 last:pb-0 relative group">
              <span className="absolute -left-[9px] top-1 inline-flex h-4 w-4 rounded-full bg-white border-2 border-neutral-900 group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors" />
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-8">
                <span className="text-xs font-mono text-neutral-400 tracking-widest lg:w-12">{s.n}</span>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 max-w-2xl leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
