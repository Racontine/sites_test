import { useI18n } from "../i18n";
import { LangToggle } from "./LangToggle";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#0a0a0a] text-neutral-400 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-orange-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                  <path d="M12 2 3 7l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="text-white text-base font-semibold">Polyrepro</div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className="mt-6">
              <LangToggle variant="dark" />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-white text-xs uppercase tracking-wider mb-4">
              {t("footer.col1")}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#societe" className="hover:text-orange-400">{t("footer.col1.1")}</a></li>
              <li><a href="#process" className="hover:text-orange-400">{t("footer.col1.2")}</a></li>
              <li><a href="#projets" className="hover:text-orange-400">{t("footer.col1.3")}</a></li>
              <li><a href="#contact" className="hover:text-orange-400">{t("footer.col1.4")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-white text-xs uppercase tracking-wider mb-4">
              {t("footer.col2")}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-orange-400">{t("footer.col2.1")}</a></li>
              <li><a href="#services" className="hover:text-orange-400">{t("footer.col2.2")}</a></li>
              <li><a href="#services" className="hover:text-orange-400">{t("footer.col2.3")}</a></li>
              <li><a href="#services" className="hover:text-orange-400">{t("footer.col2.4")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-white text-xs uppercase tracking-wider mb-4">
              {t("footer.news")}
            </div>
            <p className="text-sm">{t("footer.news.d")}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex rounded-full border border-white/10 bg-white/5 p-1"
            >
              <input
                type="email"
                placeholder={t("footer.news.ph")}
                className="flex-1 bg-transparent px-3 py-1.5 text-sm focus:outline-none placeholder:text-neutral-500"
              />
              <button className="rounded-full bg-orange-500 text-white text-sm px-4 py-1.5 hover:bg-orange-400 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row gap-4 justify-between text-xs">
          <div>© {new Date().getFullYear()} Polyrepro — {t("footer.rights")}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400">{t("footer.legal.1")}</a>
            <a href="#" className="hover:text-orange-400">{t("footer.legal.2")}</a>
            <a href="#" className="hover:text-orange-400">{t("footer.legal.3")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
