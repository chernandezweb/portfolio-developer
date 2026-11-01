import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload, faArrowRight, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from "../../useAppState";
import { useTranslation } from "react-i18next";
import resumeFR from '../../media/Carlos_Hernandez(FR).pdf';
import resumeEN from '../../media/Carlos_Hernandez(EN).pdf';

const skillGroups = [
    {
        labelKey: "skills-cat-languages",
        items: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3 / SCSS", "Python", "PHP"]
    },
    {
        labelKey: "skills-cat-frontend",
        items: ["React.js (Hooks, Context, Redux)", "Next.js", "Angular", "Ionic (iOS / Android)", "Tailwind CSS", "Responsive UI / WCAG"]
    },
    {
        labelKey: "skills-cat-backend",
        items: ["Node.js", "Express.js", "GraphQL (Apollo)", "RESTful APIs", "JWT / OAuth2 / SSO", "Custom CMS Architecture"]
    },
    {
        labelKey: "skills-cat-tools",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Git & GitHub Actions (CI/CD)", "Docker", "Jest", "Agile / Scrum"]
    }
];

const careerTimeline = [
    {
        role_en: "Senior Full Stack Developer",
        role_fr: "Développeur Full Stack Senior",
        company: "Intact Insurance (Intact Financial Corporation)",
        location: "Montreal, QC",
        period_en: "July 2019 – Present",
        period_fr: "Juillet 2019 – Présent",
        bullets_en: [
            "Architected, developed, and maintain ICITÉ from the ground up, an enterprise Learning Management System (LMS) built with React.js, TypeScript, Node.js, and GraphQL serving 500+ active brokers, underwriters, and internal employees daily across Intact's national network.",
            "Engineered the ICITÉ Administration Portal & integrated Custom CMS (React.js, Node.js, GraphQL, MySQL), enabling training managers to author learning paths, manage cohorts, schedule virtual classrooms, automate certificates, configure RBAC permissions, and export real-time analytics reports—reducing manual administration overhead by 70%.",
            "Designed and maintain a centralized suite of mission-critical Underwriter Workflow & Web Tools (React.js, Node.js, TypeScript) relied upon daily by hundreds of underwriters to automate complex policy calculations and operational workflows."
        ],
        bullets_fr: [
            "Conception, développement de A à Z et maintenance de la plateforme d'apprentissage en ligne ICITÉ (React.js, TypeScript, Node.js, GraphQL), desservant plus de 500 courtiers, souscripteurs et employés actifs chaque jour à travers le réseau pancanadien.",
            "Développement du Portail d'administration ICITÉ et de son gestionnaire de contenu (CMS) sur mesure intégré (React.js, Node.js, GraphQL, MySQL), réduisant de 70 % le temps de gestion manuelle des parcours, cohortes, classes virtuelles, certificats et rapports.",
            "Création et maintenance d'une suite d'applications web et d'outils métiers (React.js, Node.js, TypeScript) utilisés quotidiennement par des centaines de souscripteurs pour automatiser des calculs complexes et des flux opérationnels critiques."
        ]
    },
    {
        role_en: "Full Stack & Mobile Web Developer",
        role_fr: "Développeur Web Full Stack & Mobile",
        company: "Version 10",
        location: "Montreal, QC",
        period_en: "July 2018 – July 2019",
        period_fr: "Juillet 2018 – Juillet 2019",
        bullets_en: [
            "Engineered and launched the cross-platform web and mobile application Léger Opinion (LÉO) across Web, iOS, and Android using Angular, Ionic, TypeScript, and REST APIs, serving tens of thousands of active survey panelists across Canada.",
            "Developed high-traffic, CMS-driven web applications and digital platforms for major national media and enterprise clients including Radio-Canada, Télé-Québec, ICI Explora, ICI ARTV, and Léger Marketing (Indice du bonheur).",
            "Built real-time interactive digital applications for the Granby Zoo and LÜ / Radio-Canada using C# and modern component architectures."
        ],
        bullets_fr: [
            "Développement et déploiement de l'application web et mobile hybride multiplateforme Léger Opinion (LÉO) sur Web, iOS et Android avec Angular, Ionic, TypeScript et API REST, utilisée par des dizaines de milliers de panélistes au Canada.",
            "Réalisation de plateformes web à fort trafic propulsées par un CMS sur mesure pour Radio-Canada, Télé-Québec, ICI Explora, ICI ARTV et Léger Marketing (Indice du bonheur).",
            "Création d'applications interactives en temps réel pour le Zoo de Granby et LÜ / Radio-Canada."
        ]
    },
    {
        role_en: "Front-End Web Developer",
        role_fr: "Développeur Web Front-End",
        company: "Mirum Digital Agency (WPP)",
        location: "Montreal, QC",
        period_en: "March 2017 – August 2017",
        period_fr: "Mars 2017 – Août 2017",
        bullets_en: [
            "Developed responsive front-end web interfaces and reusable UI components using JavaScript (ES6), HTML5, SCSS, and PHP for enterprise clients including TD Canada Trust, Adidas, Dairy Farmers of Canada, and UGO."
        ],
        bullets_fr: [
            "Développement d'interfaces web réactives et de composants UI réutilisables avec JavaScript (ES6), HTML5, SCSS et PHP pour TD Canada Trust, Adidas, Producteurs laitiers du Canada et UGO."
        ]
    }
];

const Home = () => {
    const { t } = useTranslation();
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.setPageName('Home');
    }, [actions]);

    const isFr = state.lang === 'fr';

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="top-section">
                <div className="name-side">
                    <span className="role-badge">{t('home-page-full-stack-dev')}</span>
                    <h1>Carlos Hernandez</h1>
                    <p className="hero-subtitle">{t('home-page-hero-subtitle')}</p>
                    <div className="hero-actions">
                        <Link to="/portfolio-developer/portfolio" className="primary-cta-btn">
                            {t('home-page-view-portfolio')} <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                        <div className="links">
                            <a href="https://github.com/chernandezweb" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/carlos-hernandez-726761157/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="mailto:chernandezweb@gmail.com" aria-label="Email">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="about-grid">
                    <div className="about-me-side">
                        <h2 className="section-heading">
                            {t('home-page-about-me-label-1')} <span>{t('home-page-about-me-label-2')}</span>
                        </h2>
                        <p className="about-me-text">{t('home-page-about-me-text')}</p>
                        <div className="resume-actions">
                            <a href={resumeEN} target="_blank" rel="noreferrer" className="resume-link">
                                <button className="resume-btn">
                                    <FontAwesomeIcon icon={faFileDownload} /> {t('home-page-download-resume')} (EN)
                                </button>
                            </a>
                            <a href={resumeFR} target="_blank" rel="noreferrer" className="resume-link">
                                <button className="resume-btn resume-btn-outline">
                                    <FontAwesomeIcon icon={faFileDownload} /> {t('home-page-download-resume')} (FR)
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="infos-side">
                        <div className="info-row">
                            <span>{t('home-page-role-label')}</span>
                            <span>{t('home-page-role-value')}</span>
                        </div>
                        <div className="info-row">
                            <span>{t('home-page-experience-label')}</span>
                            <span>{t('home-page-experience-value')}</span>
                        </div>
                        <div className="info-row">
                            <span>{t('home-page-languages')}</span>
                            <span>{t('home-page-languages-text')}</span>
                        </div>
                        <div className="info-row">
                            <span>{t('home-page-address')}</span>
                            <span>Montreal, QC, Canada (EST / UTC-5)</span>
                        </div>
                        <div className="info-row">
                            <span>{t('home-page-email')}</span>
                            <span><a href="mailto:chernandezweb@gmail.com">chernandezweb@gmail.com</a></span>
                        </div>
                        <div className="info-row">
                            <span>{t('home-page-phone')}</span>
                            <span><a href="tel:+15146922706">(514) 692-2706</a></span>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h2 className="section-heading">
                        <FontAwesomeIcon icon={faCode} className="section-icon" />
                        {t('home-page-skills-title-1')} <span>{t('home-page-skills-title-2')}</span>
                    </h2>
                    <div className="skills-grid">
                        {skillGroups.map((group) => (
                            <div className="skill-card" key={group.labelKey}>
                                <h3>{t(group.labelKey)}</h3>
                                <div className="skill-pills">
                                    {group.items.map((skill) => (
                                        <span className="skill-pill" key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="experience-section">
                    <h2 className="section-heading">
                        <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
                        {t('home-page-career-title-1')} <span>{t('home-page-career-title-2')}</span>
                    </h2>
                    <div className="timeline">
                        {careerTimeline.map((job, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-header">
                                    <div>
                                        <h3>{isFr ? job.role_fr : job.role_en}</h3>
                                        <span className="timeline-company">{job.company} • {job.location}</span>
                                    </div>
                                    <span className="timeline-period">{isFr ? job.period_fr : job.period_en}</span>
                                </div>
                                <ul>
                                    {(isFr ? job.bullets_fr : job.bullets_en).map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
