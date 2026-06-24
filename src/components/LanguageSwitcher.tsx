import { Languages } from "lucide-react";
import { LOCALE_LABELS, type Locale } from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useTranslation();

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-0.5 ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {(["zh", "en"] as Locale[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
            locale === lang
              ? "bg-primary/[0.15] text-primary border border-primary/20"
              : "text-textMuted hover:text-textPrimary"
          }`}
        >
          {LOCALE_LABELS[lang]}
        </button>
      ))}
    </div>
  );
}

export function LanguageSwitcherIcon({ className = "" }: { className?: string }) {
  const { toggleLocale, locale } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-textSecondary hover:text-textPrimary hover:bg-white/[0.04] transition-all duration-200 text-xs font-medium ${className}`}
      aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
      title={locale === "zh" ? "English" : "中文"}
    >
      <Languages className="w-4 h-4" />
      {LOCALE_LABELS[locale === "zh" ? "en" : "zh"]}
    </button>
  );
}
