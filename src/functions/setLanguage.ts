import { createI18n, type I18n } from 'vue-i18n'
import EN from '@/locale/en.json'
import KH from '@/locale/kh.json'
/**
 * Sets the application language and persists the preference
 * @param locale - The locale to set the application to
 */

// Define supported locales
type SupportedLocale = 'en' | 'kh'

// Get stored language from localStorage or default to 'en'
const savedLocale = (localStorage.getItem('locale') as SupportedLocale) || 'en'

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: savedLocale, // Use the saved locale
  fallbackLocale: 'en',
  messages: {
    en: EN,
    kh: KH,
  },
})
export function setLanguage(locale: SupportedLocale): void {
  // Need to cast i18n.global to any due to type issues with vue-i18n
  ;(i18n.global.locale as any).value = locale
  localStorage.setItem('locale', locale)
  document.querySelector('html')?.setAttribute('lang', locale)
}

export default i18n
