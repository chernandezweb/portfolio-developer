import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import avatarProfile from '../../media/avatar-profile.jpg';
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
        items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS", "SQL", "Python", "PHP"]
    },
    {
        labelKey: "skills-cat-frontend",
        items: ["React.js", "Angular", "Ionic (iOS / Android)", "Twig", "jQuery", "Responsive UI"]
    },
    {
        labelKey: "skills-cat-backend",
        items: ["Node.js", "GraphQL", "REST APIs", "Custom CMS Architecture"]
    },
    {
        labelKey: "skills-cat-tools",
        items: ["MySQL", "Git", "Unity Game Engine", "Adobe Creative Suite", "Agile / Scrum"]
    }
];

const careerTimeline = [
    {
        role_en: "Full Stack Developer",
        role_fr: "Développeur Full Stack",
        company: "Intact Insurance / Intact Assurance",
        location: "Montreal, QC",
        period_en: "July 2019 – Present",
        period_fr: "Juillet 2019 – Présent",
        bullets_en: [
            "Architected, developed, and maintain ICITÉ from the ground up, an enterprise online training platform (Node.js, React.js, GraphQL) actively used every day by hundreds of brokers, underwriters, and internal employees.",
            "Engineered the Learner Portal (LMS), Administration Portal, and a custom Content Management System (CMS) built with React.js and Node.js.",
            "Developed and maintain a suite of internal web applications and workflow tools (React.js, Node.js, TypeScript) relied upon daily by hundreds of underwriters to automate specialized tasks."
        ],
        bullets_fr: [
            "Conception, développement de A à Z et maintenance de la plateforme de formation en ligne ICITÉ (Node.js, React.js, GraphQL), utilisée chaque jour par des centaines de courtiers, de souscripteurs et d'employés.",
            "Développement des trois modules clés : portail apprenant (LMS), portail d'administration et gestionnaire de contenu (CMS) personnalisé bâti avec React.js et Node.js.",
            "Création et maintenance d'une suite d'outils web internes (React.js, Node.js, TypeScript) utilisés quotidiennement par des centaines de souscripteurs dans leurs tâches spécialisées."
        ]
    },
    {
        role_en: "Front-End Web Developer",
        role_fr: "Développeur Web Front-End",
        company: "Version 10",
        location: "Montreal, QC",
        period_en: "July 2018 – July 2019",
        period_fr: "Juillet 2018 – Juillet 2019",
        bullets_en: [
            "Developed front-end web platforms using a custom CMS and PHP Twig for Radio-Canada, Télé-Québec, ARTV, Explora, Vrak TV, Canal Vie, and Léger Marketing.",
            "Built the cross-platform hybrid application Léger Opinion (LÉO) for Web, iOS, and Android using Ionic and Angular.",
            "Created interactive Unity experiences for the Granby Zoo and LÜ gymnasium games."
        ],
        bullets_fr: [
            "Développement front-end de plusieurs plateformes web avec un CMS sur mesure et PHP Twig pour Radio-Canada, Télé-Québec, ARTV, Explora, Vrak TV, Canal Vie et Léger Marketing.",
            "Réalisation de l'application hybride multiplateforme Léger Opinion (LÉO) pour Web, iOS et Android avec Ionic et Angular.",
            "Création d'expériences interactives avec Unity pour le Zoo de Granby et les jeux interactifs LÜ."
        ]
    },
    {
        role_en: "Catalog Designer & Web Integrator",
        role_fr: "Designer de Catalogue & Intégrateur Web",
        company: "Orly Cuisine",
        location: "Montreal, QC",
        period_en: "May 2017 – August 2017",
        period_fr: "Mai 2017 – Août 2017",
        bullets_en: [
            "Designed and developed two brand showcase websites and led content integration for the company's commercial print catalog."
        ],
        bullets_fr: [
            "Développement de deux sites web vitrines pour présenter deux marques de produits et intégration du catalogue imprimé."
        ]
    },
    {
        role_en: "Front-End Developer Intern",
        role_fr: "Stagiaire Développeur Front-End",
        company: "Mirum Digital Agency",
        location: "Montreal, QC",
        period_en: "March 2017 – May 2017",
        period_fr: "Mars 2017 – Mai 2017",
        bullets_en: [
            "Contributed to front-end web projects using HTML, CSS, JavaScript, and PHP Twig for Dairy Farmers of Canada, Adidas, TD Canada Trust, and UGO."
        ],
        bullets_fr: [
            "Développement front-end avec HTML, CSS, JavaScript et PHP Twig pour Producteurs laitiers du Canada, Adidas, TD Canada Trust et UGO."
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
                <div className="avatar-side">
                    <img src={avatarProfile} alt="Carlos Hernandez" />
                </div>
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
                            <a href="https://www.linkedin.com/in/carlos-hernandez-7a0177133/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
                            <span>Montreal, QC, Canada</span>
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
