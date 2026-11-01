import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from 'js-cookie';

const resources = {
    en: {
        translation: {
            "menu-home": "Home",
            "menu-portfolio": "Portfolio",
            "home-page-full-stack-dev": "Senior Full Stack Developer — React.js • TypeScript • Node.js • GraphQL",
            "home-page-hero-subtitle": "Architecting, building, and scaling enterprise web platforms, SaaS applications, and internal workflow systems actively used every day by 500+ underwriters, brokers, and employees.",
            "home-page-view-portfolio": "View Featured Projects",
            "home-page-about-me-label-1": "About",
            "home-page-about-me-label-2": "Me",
            "home-page-about-me-text": "I'm Carlos Hernandez, a Senior Full Stack Developer based in Montreal (EST / UTC-5) with 8+ years of experience designing, architecting, and scaling production web applications. Over the past 7+ years at Intact Insurance, I built and maintain the ICITÉ enterprise learning ecosystem (LMS, Administration Portal, and integrated custom CMS) along with a suite of mission-critical workflow tools relied upon every day by 500+ underwriters and brokers across Canada.",
            "home-page-download-resume": "Download CV",
            "home-page-experience-label": "Experience",
            "home-page-experience-value": "8+ Years",
            "home-page-role-label": "Current Role",
            "home-page-role-value": "Senior Full Stack Developer @ Intact Insurance",
            "home-page-languages": "Languages",
            "home-page-languages-text": "English, French, Spanish",
            "home-page-country": "Country",
            "home-page-address": "Location",
            "home-page-email": "Email",
            "home-page-phone": "Phone",
            "home-page-skills-title-1": "Technical",
            "home-page-skills-title-2": "Skills",
            "skills-cat-languages": "Languages",
            "skills-cat-frontend": "Front-End",
            "skills-cat-backend": "Back-End & APIs",
            "skills-cat-tools": "Databases & Tools",
            "home-page-career-title-1": "Work",
            "home-page-career-title-2": "Experience",
            "portfolio-subtitle": "Selected enterprise platforms, SaaS applications, cross-platform mobile apps, and high-traffic media portals I have architected, built, and maintained.",
            "filter-all": "All Projects",
            "filter-fullstack": "Full Stack & Enterprise",
            "filter-web": "Web & Media",
            "filter-interactive": "Mobile & Interactive",
            "visit-website": "Visit Live Platform",
            "url-private": "Internal / Archived Project",
            "zoom-image": "Click to enlarge"
        }
    },
    fr: {
        translation: {
            "menu-home": "Accueil",
            "menu-portfolio": "Portfolio",
            "home-page-full-stack-dev": "Développeur Full Stack Senior — React.js • TypeScript • Node.js • GraphQL",
            "home-page-hero-subtitle": "Architecture, conception et maintenance de plateformes web d'entreprise, d'applications SaaS et d'outils opérationnels utilisés chaque jour par plus de 500 souscripteurs, courtiers et employés.",
            "home-page-view-portfolio": "Voir mes réalisations",
            "home-page-about-me-label-1": "À propos de",
            "home-page-about-me-label-2": "moi",
            "home-page-about-me-text": "Je suis Carlos Hernandez, développeur Full Stack Senior basé à Montréal (EST / UTC-5) comptant plus de 8 ans d'expérience dans l'architecture et le développement d'applications web de production. Depuis plus de 7 ans chez Intact Assurance, j'ai conçu de A à Z et je maintiens l'écosystème de formation ICITÉ (LMS, portail d'administration et CMS sur mesure intégré) ainsi qu'une suite d'outils métiers utilisés quotidiennement par plus de 500 souscripteurs et courtiers à travers le Canada.",
            "home-page-download-resume": "Télécharger CV",
            "home-page-experience-label": "Expérience",
            "home-page-experience-value": "8+ ans",
            "home-page-role-label": "Poste actuel",
            "home-page-role-value": "Développeur Full Stack Senior @ Intact Assurance",
            "home-page-languages": "Langues",
            "home-page-languages-text": "Français, Anglais, Espagnol",
            "home-page-country": "Pays",
            "home-page-address": "Localisation",
            "home-page-email": "Courriel",
            "home-page-phone": "Téléphone",
            "home-page-skills-title-1": "Compétences",
            "home-page-skills-title-2": "Techniques",
            "skills-cat-languages": "Langages",
            "skills-cat-frontend": "Front-End",
            "skills-cat-backend": "Back-End & API",
            "skills-cat-tools": "Bases de données & Outils",
            "home-page-career-title-1": "Expérience",
            "home-page-career-title-2": "Professionnelle",
            "portfolio-subtitle": "Sélection de plateformes d'entreprise, d'applications SaaS, d'applications mobiles hybrides et de portails médias à fort trafic que j'ai conçus, développés et maintenus.",
            "filter-all": "Tous les projets",
            "filter-fullstack": "Full Stack & Entreprise",
            "filter-web": "Web & Médias",
            "filter-interactive": "Mobile & Interactif",
            "visit-website": "Visiter la plateforme",
            "url-private": "Projet interne / archivé",
            "zoom-image": "Cliquer pour agrandir"
        }
    }
};

const savedLang = Cookies.get('lang') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
