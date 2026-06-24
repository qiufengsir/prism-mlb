import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Locale } from "@/i18n";

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: "zh",
      setLocale: (locale) => set({ locale }),
      toggleLocale: () => set({ locale: get().locale === "zh" ? "en" : "zh" }),
    }),
    { name: "panzerknacker-locale" }
  )
);
