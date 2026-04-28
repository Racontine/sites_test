import { useI18n } from "../i18n";

export function Projects() {
  const { t } = useI18n();
  const projects = [
    {
      tag: t("projects.1.tag"),
      title: t("projects.1.t"),
      sub: t("projects.1.s"),
      d: t("projects.1.d"),
      accent: "from-orange-500 to-rose-500",
    },
    {
      tag: t("projects.2.tag"),
      title: t("projects.2.t"),
      sub: t("projects.2.s"),
      d: t("projects.2.d"),
      accent: "from-amber-400 to-orange-500",
    },
    {
      tag: t("projects.3.tag"),
      title: t("projects.3.t"),
      sub: t("projects.3.s"),
      d: t("projects.3.d"),
      accent: "from-neutral-700 to-neutral-900",
    },
  ];

  return (
    <section id="projets" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-8 bg-orange-600" />
              {t("projects.kicker")}
            </div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              {t("projects.title.1")}
              <br />
              <span className="italic font-serif font-light">{t("projects.title.2")}</span>
            </h2>
          </div>
          <p className="lg:max-w-md text-neutral-600 leading-relaxed text-sm">
            {t("projects.desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 text-white aspect-[4/5] flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90`} />
              <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay" viewBox="0 0 400 500" preserveAspectRatio="none">
                <defs>
                  <pattern id={`p${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="500" fill={`url(#p${i})`} />
              </svg>
              <svg className="absolute right-0 top-1/4 w-2/3 opacity-60" viewBox="0 0 200 200">
                <polygon
                  points={i === 0 ? "100,20 180,80 150,180 50,180 20,80" : i === 1 ? "100,10 190,100 100,190 10,100" : "30,30 170,30 170,170 30,170"}
                  fill="none" stroke="white" strokeWidth="1"
                />
                <polygon
                  points={i === 0 ? "100,40 160,90 140,160 60,160 40,90" : i === 1 ? "100,30 170,100 100,170 30,100" : "50,50 150,50 150,150 50,150"}
                  fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.6"
                />
              </svg>

              <div className="relative p-7 mt-auto">
                <span className="inline-block text-[10px] uppercase tracking-widest bg-white/15 backdrop-blur rounded-full px-2.5 py-1 border border-white/20">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-white/80">{p.sub}</p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
