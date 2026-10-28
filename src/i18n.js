import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from 'js-cookie';

const resources = {
    en: {
        translation: {
            "menu-home": "Home",
            "menu-portfolio": "Portfolio",
            "home-page-full-stack-dev": "Full Stack Developer",
            "home-page-hero-subtitle": "Building and maintaining scalable enterprise platforms, modern web apps & custom tools used daily by hundreds of underwriters and brokers.",
            "home-page-view-portfolio": "View Projects",
            "home-page-about-me-label-1": "About",
            "home-page-about-me-label-2": "Me",
            "home-page-about-me-text": "Hello! I'm Carlos Hernandez, a Full Stack Developer based in Montreal with 8+ years of experience designing, architecting, and maintaining modern web applications and enterprise platforms. From building Intact Insurance's ICITÉ training ecosystem (LMS, Admin Portal, and custom CMS) and internal workflow tools—actively used every day by hundreds of underwriters, brokers, and employees—to delivering high-traffic platforms for major media brands, I specialize in turning complex workflows into clean, reliable user experiences.",
            "home-page-download-resume": "Download CV",
            "home-page-experience-label": "Experience",
            "home-page-experience-value": "8+ Years",
            "home-page-role-label": "Current Role",
            "home-page-role-value": "Full Stack Developer @ Intact Insurance",
            "home-page-languages": "Languages",
            "home-page-languages-text": "French, English, Spanish",
            "home-page-country": "Country",
            "home-page-address": "Location",
            "home-page-email": "Email",
            "home-page-phone": "Phone",
            "home-page-skills-title-1": "Technical",
            "home-page-skills-title-2": "Skills",
            "skills-cat-languages": "Languages",
            "skills-cat-frontend": "Front-End & Mobile",
            "skills-cat-backend": "Back-End, APIs & CMS",
            "skills-cat-tools": "Databases, Tools & Engines",
            "home-page-career-title-1": "Work",
            "home-page-career-title-2": "Experience",
            "portfolio-subtitle": "A selection of enterprise platforms, web applications, hybrid mobile apps, and interactive experiences I have built and maintained.",
            "filter-all": "All Projects",
            "filter-fullstack": "Full Stack & Enterprise",
            "filter-web": "Web & Media",
            "filter-interactive": "Mobile & Interactive",
            "visit-website": "Visit Website",
            "url-private": "Internal / Archived Project",
            "zoom-image": "Click to enlarge"
        }
    },
    fr: {
        translation: {
            "menu-home": "Accueil",
            "menu-portfolio": "Portfolio",
            "home-page-full-stack-dev": "Développeur Full Stack",
            "home-page-hero-subtitle": "Conception et maintenance de plateformes d'entreprise évolutives, d'applications web modernes et d'outils sur mesure utilisés chaque jour par des centaines de souscripteurs et de courtiers.",
            "home-page-view-portfolio": "Voir mes projets",
            "home-page-about-me-label-1": "À propos de",
            "home-page-about-me-label-2": "moi",
            "home-page-about-me-text": "Bonjour ! Je m'appelle Carlos Hernandez, développeur Full Stack basé à Montréal comptant plus de 8 ans d'expérience dans la conception, l'architecture et la maintenance d'applications web modernes et de plateformes d'entreprise. De la création complète de l'écosystème de formation ICITÉ chez Intact Assurance (LMS, portail d'administration et CMS sur mesure) ainsi que d'outils web internes utilisés quotidiennement par des centaines de souscripteurs, de courtiers et d'employés, jusqu'à la réalisation de plateformes à fort trafic pour de grands médias, je transforme des besoins complexes en solutions performantes et intuitives.",
            "home-page-download-resume": "Télécharger CV",
            "home-page-experience-label": "Expérience",
            "home-page-experience-value": "8+ ans",
            "home-page-role-label": "Poste actuel",
            "home-page-role-value": "Développeur Full Stack @ Intact Assurance",
            "home-page-languages": "Langues",
            "home-page-languages-text": "Français, Anglais, Espagnol",
            "home-page-country": "Pays",
            "home-page-address": "Localisation",
            "home-page-email": "Courriel",
            "home-page-phone": "Téléphone",
            "home-page-skills-title-1": "Compétences",
            "home-page-skills-title-2": "Techniques",
            "skills-cat-languages": "Langages",
            "skills-cat-frontend": "Front-End & Mobile",
            "skills-cat-backend": "Back-End, API & CMS",
            "skills-cat-tools": "Bases de données, Outils & Moteurs",
            "home-page-career-title-1": "Expérience",
            "home-page-career-title-2": "Professionnelle",
            "portfolio-subtitle": "Une sélection de plateformes d'entreprise, d'applications web, d'applications mobiles hybrides et d'expériences interactives que j'ai développées et maintenues.",
            "filter-all": "Tous les projets",
            "filter-fullstack": "Full Stack & Entreprise",
            "filter-web": "Web & Médias",
            "filter-interactive": "Mobile & Interactif",
            "visit-website": "Visiter le site",
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
