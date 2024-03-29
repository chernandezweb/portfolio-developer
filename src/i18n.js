import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from 'js-cookie'


const resources = {
    en: {
        translation: {
            "menu-home": "Home",
            "home-page-full-stack-dev": "Full Stack Developer",
            "home-page-about-me-label-1": "About",
            "home-page-about-me-label-2": "me",
            "home-page-about-me-text": "Hello, I'm Carlos Hernandez. I am a experienced Full Stack Developer with 4+ years of experience developing websites and applications using the latest technologies.",
            "home-page-download-resume": "DOWNLOAD RESUME",
            "home-page-age": "Age",
            "home-page-languages": "Languages",
            "home-page-languages-text": "French, English and Spanish",
            "home-page-country": "Country",
            "home-page-address": "Address",
            "home-page-email": "Email",
        }
    },
    fr: {
        translation: {
            "menu-home": "Accueil",
            "home-page-full-stack-dev": "Développeur Full Stack",
            "home-page-about-me-label-1": "À propos de",
            "home-page-about-me-label-2": "moi",
            "home-page-about-me-text": "Bonjour, je m'appelle Carlos Hernandez. Je suis un développeur Full Stack expérimenté avec plus de 4 ans d'expérience dans le développement de sites Web et d'applications utilisant les dernières technologies.",
            "home-page-download-resume": "TÉLÉCHARGER MON CV",
            "home-page-age": "Âge",
            "home-page-languages": "Languages",
            "home-page-languages-text": "Français, Anglais, Espagnol",
            "home-page-country": "Pays",
            "home-page-address": "Adresse",
            "home-page-email": "Courriel",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: Cookies.get('lang') ? Cookies.get('lang') : 'en',
        fallbackLng: Cookies.get('lang') ? Cookies.get('lang') : 'en', // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;