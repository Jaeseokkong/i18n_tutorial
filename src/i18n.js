import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector' //언어 감지기

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    debug: true,
    fallbackLng : 'en',
    resources : {
        en : {
            translation : {
                learn : 'learn react-i18next'
            }
        }
    }
})
