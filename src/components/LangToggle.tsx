import { useI18n, Lang } from "../i18n";

type Props = {
  variant?: "light" | "dark";
};

export function LangToggle({ variant = "light" }: Props) {
  const { lang, setLang } = useI18n();

  const isDark = variant === "dark";
  const base = isDark
    ? "border-white/15 bg-white/5 text-white"
    : "border-neutral-300 bg-white/70 text-neutral-700";
  const activeCls = isDark
    ? "bg-orange-500 text-white shadow"
    : "bg-neutral-900 text-white shadow";
  const inactiveCls = isDark
    ? "text-neutral-400 hover:text-white"
    : "text-neutral-500 hover:text-neutral-900";

  const opt = (code: Lang, label: string) => (
    <button
      key={code}
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      aria-label={code === "fr" ? "Français" : "English"}
      className={`relative z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
        lang === code ? activeCls : inactiveCls
      }`}
    >
      <Flag code={code} />
      <span>{label}</span>
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border p-1 backdrop-blur ${base}`}
      role="group"
      aria-label="Language switcher"
    >
      {opt("fr", "FR")}
      {opt("en", "EN")}
    </div>
  );
}

function Flag({ code }: { code: Lang }) {
  if (code === "fr") {
    return (
      <svg viewBox="0 0 9 6" className="h-3 w-[18px] rounded-[2px] overflow-hidden ring-1 ring-black/10">
        <rect width="3" height="6" x="0" fill="#0055A4" />
        <rect width="3" height="6" x="3" fill="#FFFFFF" />
        <rect width="3" height="6" x="6" fill="#EF4135" />
      </svg>
    );
  }
  // UK flag (Union Jack) for EN
  return (
    <svg viewBox="0 0 60 30" className="h-3 w-[18px] rounded-[2px] overflow-hidden ring-1 ring-black/10">
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
        <path d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
