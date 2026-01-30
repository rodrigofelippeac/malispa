import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import translationPT from './locales/pt.json'
import translationEN from './locales/en.json'
import translationES from './locales/es.json'

// Translation resources
const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
}

// Get saved language from localStorage or default to Portuguese
const savedLanguage = localStorage.getItem('maliSpaLanguage') || 'pt'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // default language
    fallbackLng: 'pt', // fallback language if translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('maliSpaLanguage', lng)
})

export default i18n
