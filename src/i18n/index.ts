import { en } from "./locales/en";
import { zh } from "./locales/zh";
import type { Locale, MemberLocale, Translation } from "./types";

export type { Locale, Translation, MemberLocale };

export const translations: Record<Locale, Translation> = { zh, en };

export const LOCALE_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
};

export function formatText(template: string, vars: Record<string, string | number>) {
  return Object.entries(vars).reduce(
    (text, [key, value]) => text.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), String(value)),
    template
  );
}

export function getMemberLocale(locale: Locale, memberId: string): MemberLocale | null {
  return translations[locale].members[memberId] ?? null;
}
