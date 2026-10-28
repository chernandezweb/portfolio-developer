import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useAppContext } from "../../useAppState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faExternalLinkAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import Lightbox from 'react-image-lightbox';
import { useTranslation } from "react-i18next";
import 'react-image-lightbox/style.css';

const projects = [
    {
        id: "icite-lms",
        title: "ICITÉ — Learning Management System (LMS)",
        company: "Intact Insurance",
        category: "fullstack",
        image: require('../../media/lms-icite.jpg'),
        desc_fr: "ICITÉ est une plateforme de formation en ligne d'entreprise utilisée par le réseau de courtage d'Intact Assurance ainsi que par les employés et les souscripteurs. Étant le seul développeur lors du lancement de cette initiative au sein de l'équipe Formation et Développement, j'ai conçu et développé cette plateforme de A à Z pour répondre aux besoins de formation spécialisés que les autres systèmes internes ne couvraient pas.",
        desc_en: "ICITÉ is an enterprise online training platform used by the Intact Insurance brokerage network as well as internal employees and underwriters. As the sole developer when launching this initiative within the Training and Development team, I architected and built this platform from the ground up to meet specialized training needs that existing internal platforms could not address.",
        url: "https://icite.ca/",
        tech: ["React.js", "Node.js", "GraphQL", "TypeScript"]
    },
    {
        id: "icite-admin",
        title: "ICITÉ — Administration Portal",
        company: "Intact Insurance",
        category: "fullstack",
        image: require('../../media/admin-icite.jpg'),
        desc_fr: "Portail d'administration complet de l'écosystème ICITÉ centralisant la gestion des inscriptions des participants, des gestionnaires, des cohortes, des permissions d'accès, des rapports analytiques et de l'API.",
        desc_en: "Comprehensive administration portal for the ICITÉ ecosystem centralizing participant registrations, manager accounts, cohorts, access permissions, analytics reports, and API management.",
        tech: ["React.js", "Node.js", "GraphQL", "TypeScript"]
    },
    {
        id: "icite-cms",
        title: "ICITÉ — Headless CMS",
        company: "Intact Insurance",
        category: "fullstack",
        image: require('../../media/cms-icite.jpg'),
        desc_fr: "Gestionnaire de contenu (Headless CMS) développé et personnalisé sur mesure pour structurer, éditer et publier les différents formats de parcours et de modules de formation d'ICITÉ.",
        desc_en: "Customized Headless Content Management System engineered to structure, author, and publish diverse interactive training modules and learning paths for ICITÉ.",
        tech: ["Node.js", "Directus (Headless CMS)", "GraphQL", "MySQL"]
    },
    {
        id: "intact-underwriter-tools",
        title: "Underwriter Workflow & Web Tools",
        company: "Intact Insurance",
        category: "fullstack",
        image: require('../../media/outils-web-intact.jpg'),
        desc_fr: "Suite d'outils et de calculateurs web sur mesure développés pour aider les souscripteurs d'Intact Assurance à automatiser et accélérer leurs tâches opérationnelles quotidiennes.",
        desc_en: "Suite of custom web applications and workflow utilities engineered to help Intact Insurance underwriters automate and streamline specialized operational tasks.",
        url: "https://experiencedeveloppement.net/outils/",
        tech: ["React.js", "Node.js", "TypeScript"]
    },
    {
        id: "leger-opinion",
        title: "Léger Opinion (LÉO)",
        company: "Version 10 • Léger",
        category: "interactive",
        image: require('../../media/legeropinion.jpg'),
        desc_fr: "Plateforme comprenant un site web marketing ainsi qu'une application hybride multiplateforme (Web, iOS et Android) permettant aux membres d'accéder aux sondages offerts par Léger et de recevoir des récompenses.",
        desc_en: "Platform featuring a marketing website and a connected cross-platform hybrid application (Web, iOS, and Android) where users complete Léger surveys and earn rewards.",
        url: "https://www.legeropinion.com/",
        tech: ["Ionic", "Angular", "PHP Twig", "HTML5", "SCSS", "JavaScript"]
    },
    {
        id: "indice-bonheur-leger",
        title: "Indice du bonheur Léger",
        company: "Version 10 • Léger",
        category: "web",
        image: require('../../media/ibl.jpg'),
        desc_fr: "Plateforme web interactive permettant aux utilisateurs de répondre à trois types de questionnaires pour calculer et suivre leur indice de bonheur, leur indice d'humeur et leur indice de bonheur au travail.",
        desc_en: "Interactive web platform where users complete three specialized questionnaires to measure and track their personal happiness index, mood index, and workplace happiness index.",
        url: "https://indicedebonheur.com/",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "tournee-zone-jeunesse-lu",
        title: "La tournée Zone Jeunesse (LÜ)",
        company: "Version 10 • Radio-Canada",
        category: "interactive",
        image: require('../../media/zone-jeunnesse.jpg'),
        video: 'https://ici.radio-canada.ca/tourneezonejeunesse/medias/videos/RC_TourneeZoneJeunesse_2020-generic.mp4',
        desc_fr: "Développement de jeux interactifs projetés sur les murs de gymnases scolaires, permettant aux enfants d'interagir en temps réel en lançant des ballons sur les cibles projetées.",
        desc_en: "Developed interactive games projected onto school gymnasium walls, enabling children to interact with the game environment in real time by throwing balls at projected targets.",
        tech: ["Unity", "C#", "Interactive Projection"]
    },
    {
        id: "zoo-granby-lions",
        title: "Interactive Lions Zone Experience (Granby Zoo)",
        company: "Version 10 • Zoo de Granby",
        category: "interactive",
        image: require('../../media/zoo-granby-lions.jpg'),
        desc_fr: "Développement d'une borne et expérience interactive avec le moteur Unity présentant du contenu éducatif et ludique dans le pavillon de la zone des lions au Zoo de Granby.",
        desc_en: "Engineered an interactive educational kiosk experience built with Unity and installed in the Lions Zone exhibit at the Granby Zoo.",
        tech: ["Unity", "C#", "Interactive Kiosk"]
    },
    {
        id: "une-autre-histoire",
        title: "Une autre histoire (Personnages)",
        company: "Version 10 • Radio-Canada",
        category: "web",
        image: require('../../media/une-autre-histoire.jpg'),
        desc_fr: "Plateforme web interactive conçue pour présenter de façon créative l'univers et les personnages de la série télévisée « Une autre histoire » diffusée sur ICI Radio-Canada Télé.",
        desc_en: "Creative interactive web showcase designed to present the characters and storylines of the Radio-Canada television series 'Une autre histoire'.",
        url: "https://ici.radio-canada.ca/uneautrehistoirepersonnages/",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "ici-explora",
        title: "ICI Explora",
        company: "Version 10 • Radio-Canada",
        category: "web",
        image: require('../../media/explora.jpg'),
        desc_fr: "Refonte complète du site web officiel de la chaîne télévisée spécialisée ICI Explora de Radio-Canada, propulsée par un CMS interne sur mesure.",
        desc_en: "Full front-end redesign and development of the official website for Radio-Canada's specialty science and discovery TV channel, ICI Explora.",
        url: "https://ici.exploratv.ca/",
        tech: ["PHP Twig", "Custom CMS", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "ici-artv",
        title: "ICI ARTV",
        company: "Version 10 • Radio-Canada",
        category: "web",
        image: require('../../media/artv.jpg'),
        desc_fr: "Développement et refonte du site web de la chaîne culturelle ICI ARTV de Radio-Canada, réalisé en coordination architecturale avec la plateforme ICI Explora.",
        desc_en: "Front-end redesign and development for Radio-Canada's arts and culture TV channel ICI ARTV, built in architectural coordination with the ICI Explora platform.",
        url: "https://ici.artv.ca/",
        tech: ["PHP Twig", "Custom CMS", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "clash-vrak",
        title: "Clash (Vrak TV)",
        company: "Version 10 • Vrak TV",
        category: "web",
        image: require('../../media/clash.jpg'),
        desc_fr: "Développement front-end du portail web officiel de la série quotidienne « Clash » diffusée sur Vrak TV, regroupant vidéos, fiches de personnages et résumés d'épisodes.",
        desc_en: "Front-end development for the official web portal of Vrak TV's daily drama series 'Clash', featuring video streaming, character profiles, and episode guides.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "on-joue-au-docteur",
        title: "On joue au docteur (Canal Vie)",
        company: "Version 10 • Canal Vie",
        category: "web",
        image: require('../../media/on-joue-au-docteur.jpg'),
        desc_fr: "Développement front-end du site web officiel de l'émission « On joue au docteur » diffusée sur les ondes de Canal Vie.",
        desc_en: "Front-end development for the official companion website of Canal Vie's television show 'On joue au docteur'.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "max-et-livia",
        title: "Max et Livia (Vrak TV)",
        company: "Version 10 • Vrak TV",
        category: "web",
        image: require('../../media/max-et-livia.jpg'),
        desc_fr: "Développement front-end du site web officiel de la populaire série télévisée « Max et Livia ».",
        desc_en: "Front-end web development for the hit television comedy series 'Max et Livia'.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "fous-des-bateaux",
        title: "Fous des bateaux",
        company: "Version 10",
        category: "web",
        image: require('../../media/fous-des-bateaux.jpg'),
        desc_fr: "Développement front-end du site web de l'émission télévisée « Fous des bateaux ».",
        desc_en: "Front-end web development for the television series 'Fous des bateaux'.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    }
];

const Portfolio = () => {
    const { t } = useTranslation();
    const { state, actions } = useAppContext();

    const [activeFilter, setActiveFilter] = useState('all');
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [currentQImage, setCurrentQImage] = useState('');

    useEffect(() => {
        actions.setPageName('Portfolio');
    }, [actions]);

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const filters = [
        { key: 'all', label: t('filter-all'), count: projects.length },
        { key: 'fullstack', label: t('filter-fullstack'), count: projects.filter(p => p.category === 'fullstack').length },
        { key: 'web', label: t('filter-web'), count: projects.filter(p => p.category === 'web').length },
        { key: 'interactive', label: t('filter-interactive'), count: projects.filter(p => p.category === 'interactive').length },
    ];

    return (
        <motion.div
            className="portfolio-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="top-section">
                <h1>Portfolio</h1>
                <p className="portfolio-subtitle">{t('portfolio-subtitle')}</p>
            </div>

            <div className="bottom-section">
                <div className="portfolio-filters">
                    {filters.map(f => (
                        <button
                            key={f.key}
                            className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {f.label} <span className="filter-count">{f.count}</span>
                        </button>
                    ))}
                </div>

                <div className="projects-list">
                    {filteredProjects.map((project) => (
                        <motion.article
                            className="project-cnt"
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div
                                className="project-image-cnt"
                                onClick={() => {
                                    setCurrentQImage(project.image);
                                    setIsLightBoxOpen(true);
                                }}
                            >
                                <img
                                    className="project-image"
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="zoom-image-btn">
                                    <FontAwesomeIcon icon={faSearchPlus} />
                                    <span>{t('zoom-image')}</span>
                                </div>
                            </div>

                            <div className="project-description-cnt">
                                <div className="project-header">
                                    <span className="project-company-badge">{project.company}</span>
                                    <h2 className="project-title">{project.title}</h2>
                                </div>

                                <p className="project-desc">
                                    {state.lang === 'fr' ? project.desc_fr : project.desc_en}
                                </p>

                                {project.video && (
                                    <div className="project-video-wrap">
                                        <video width="100%" style={{ maxWidth: 420, borderRadius: 8 }} controls>
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                    </div>
                                )}

                                <div className="project-footer">
                                    <div className="project-tech-list">
                                        {project.tech.map((techItem) => (
                                            <span className="tech-badge" key={techItem}>{techItem}</span>
                                        ))}
                                    </div>

                                    <div className="project-action">
                                        {project.url ? (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-link-btn"
                                            >
                                                {t('visit-website')} <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        ) : (
                                            <span className="project-private-badge">
                                                <FontAwesomeIcon icon={faLock} /> {t('url-private')}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {isLightBoxOpen && currentQImage && (
                <Lightbox
                    mainSrc={currentQImage}
                    onCloseRequest={() => setIsLightBoxOpen(false)}
                />
            )}
        </motion.div>
    );
};

export default Portfolio;
