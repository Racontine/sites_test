import { useState } from "react";
import { useI18n } from "../i18n";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              {t("contact.kicker")}
            </div>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
              {t("contact.title.1")}
              <br />
              {t("contact.title.2")}
            </h2>
            <p className="mt-6 text-neutral-400 max-w-md leading-relaxed">
              {t("contact.desc")}
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">
                  {t("contact.phone")}
                </div>
                <div className="mt-1 text-lg">+33 (0)1 — — — — —</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">
                  {t("contact.email")}
                </div>
                <div className="mt-1 text-lg">contact@polyrepro.fr</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs uppercase tracking-wider text-neutral-500">
                  {t("contact.workshop")}
                </div>
                <div className="mt-1 text-lg">{t("contact.workshop.v")}</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 lg:p-10">
            {sent ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{t("contact.sent.t")}</h3>
                <p className="mt-2 text-neutral-400 max-w-xs">{t("contact.sent.d")}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("contact.f.firstname")} name="firstname" />
                  <Field label={t("contact.f.lastname")} name="lastname" />
                </div>
                <Field label={t("contact.f.email")} name="email" type="email" />
                <Field label={t("contact.f.company")} name="company" />
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    {t("contact.f.type")}
                  </label>
                  <select className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors">
                    <option className="bg-neutral-900">{t("contact.f.type.1")}</option>
                    <option className="bg-neutral-900">{t("contact.f.type.2")}</option>
                    <option className="bg-neutral-900">{t("contact.f.type.3")}</option>
                    <option className="bg-neutral-900">{t("contact.f.type.4")}</option>
                    <option className="bg-neutral-900">{t("contact.f.type.5")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    {t("contact.f.message")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder={t("contact.f.placeholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-medium text-white hover:bg-orange-400 transition-colors"
                >
                  {t("contact.f.submit")} <span>→</span>
                </button>
                <p className="text-xs text-neutral-500 text-center">
                  {t("contact.f.legal")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
      />
    </div>
  );
}
