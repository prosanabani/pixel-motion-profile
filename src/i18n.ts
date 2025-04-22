
import { i18n } from "@lingui/core";
import { detect, fromNavigator, fromStorage } from "@lingui/detect-locale";
import { en, ar } from "make-plural/plurals";

export const locales = {
  en: "English",
  ar: "العربية",
};

export const defaultLocale = "en";

i18n.loadLocaleData({
  en: { plurals: en },
  ar: { plurals: ar },
});

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`./locales/${locale}.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
  
  // Set document direction based on locale
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = locale;
  
  // Store the selected locale
  localStorage.setItem("locale", locale);
  
  return locale;
}

export function setupI18n() {
  // Detect user's preferred locale
  const detectedLocale = detect(
    fromStorage("locale"),
    fromNavigator(),
    () => defaultLocale
  );
  
  return dynamicActivate(detectedLocale);
}
