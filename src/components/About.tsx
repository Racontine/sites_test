import { useI18n } from "../i18n";

export function About() {
  const { t } = useI18n();
  const cards = [
    { t: t("about.card1.t"), d: t("about.card1.d") },
    { t: t("about.card2.t"), d: t("about.card2.d") },
    { t: t("about.card3.t"), d: t("about.card3.d") },
  ];

  return (
    <section id="societe" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-600">
                <span className="h-px w-8 bg-orange-600" />
                {t("about.kicker")}
              </div>
              <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {t("about.title")}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-2xl lg:text-3xl font-light leading-snug text-neutral-800">
              {t("about.lead.1")}
              <span className="text-orange-600 font-normal italic"> {t("about.lead.2")}</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 pt-6 text-neutral-600 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
            </div>

            <div className="pt-8 grid sm:grid-cols-3 gap-4">
              {cards.map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 hover:border-neutral-900 transition-colors"
                >
                  <div className="text-sm font-semibold">{c.t}</div>
                  <div className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                    {c.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
