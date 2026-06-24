import { useEffect } from "react";
import { translations } from "@/i18n";
import { useLocaleStore } from "@/store/useLocaleStore";

export function useTranslation() {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);
  const toggleLocale = useLocaleStore((s) => s.toggleLocale);
  const t = translations[locale];

  return { locale, setLocale, toggleLocale, t };
}

export function LocaleSync() {
  const locale = useLocaleStore((s) => s.locale);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return null;
}
