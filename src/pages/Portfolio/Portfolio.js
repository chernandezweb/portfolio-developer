import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useAppContext } from "../../useAppState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faExternalLinkAlt, faLock, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Lightbox from 'react-image-lightbox';
import { useTranslation } from "react-i18next";
import 'react-image-lightbox/style.css';

const projects = [
    {
        id: "icite-lms",
        title: "ICITÉ — Learning Management System (LMS)",
        company: "Intact Insurance",
        category: "fullstack",
        images: [
            require('../../media/icite-accueil.jpg'),
            require('../../media/icite-parcours.jpg'),
            require('../../media/icite-formation-detail.jpg'),
            require('../../media/icite-certificates.jpg'),
            require('../../media/icite-info.jpg'),
            require('../../media/icite-login.jpg')
        ],
        desc_fr: "ICITÉ est une plateforme de formation en ligne d'entreprise développée de A à Z et maintenue au quotidien, utilisée chaque jour par des centaines de courtiers du réseau d'Intact Assurance ainsi que par les souscripteurs et les employés internes. Étant le seul développeur lors du lancement de cette initiative au sein de l'équipe Formation et Développement, j'ai conçu et bâti cette plateforme pour répondre aux besoins de formation spécialisés que les autres systèmes internes ne couvraient pas.",
        desc_en: "ICITÉ is an enterprise online training platform built from the ground up and actively maintained, serving hundreds of brokers across the Intact Insurance brokerage network as well as underwriters and internal employees every day. As the sole developer when launching this initiative within the Training and Development team, I architected and developed this platform to meet specialized training needs that other internal platforms could not address.",
        url: "https://icite.intactfc.com/",
        tech: ["React.js", "Node.js", "GraphQL", "TypeScript"]
    },
    {
        id: "icite-admin",
        title: "ICITÉ — Administration & Content Management Portal (CMS)",
        company: "Intact Insurance",
        category: "fullstack",
        images: [
            require('../../media/admin-icite-accueil.jpg'),
            require('../../media/admin-icite-cms.jpg'),
            require('../../media/admin-icite-parcours.jpg'),
            require('../../media/admin-icite-rapports.jpg'),
            require('../../media/admin-icite-sondages.jpg'),
            require('../../media/admin-icite.jpg')
        ],
        desc_fr: "Portail d'administration complet et gestionnaire de contenu (CMS) intégré de l'écosystème ICITÉ. Centralise la création et l'édition des parcours et modules de formation, la gestion quotidienne des inscriptions des participants, des gestionnaires, des cohortes, des classes virtuelles, des sondages, des certificats, des permissions d'accès et des rapports analytiques.",
        desc_en: "Comprehensive administration portal and integrated Content Management System (CMS) for the ICITÉ ecosystem. Centralizes authoring and publishing of training paths and modules, daily management of participant registrations, manager accounts, cohorts, virtual classrooms, surveys, certificates, access permissions, and analytics reports.",
        url: "https://admin.icite.intactfc.com/",
        tech: ["React.js", "Node.js", "GraphQL", "TypeScript"]
    },
    {
        id: "intact-underwriter-tools",
        title: "Underwriter Workflow & Web Tools",
        company: "Intact Insurance",
        category: "fullstack",
        images: [
            require('../../media/outils-web-intact.jpg')
        ],
        desc_fr: "Suite d'applications et d'outils web développés et maintenus pour assister des centaines de souscripteurs et de courtiers chaque jour dans l'exécution et l'automatisation de leurs tâches opérationnelles spécifiques.",
        desc_en: "Suite of custom web applications and workflow utilities developed and maintained for hundreds of underwriters and brokers who rely on them every day to automate and streamline specialized operational tasks.",
        url: "https://experiencedeveloppement.net/outils/",
        tech: ["React.js", "Node.js", "TypeScript"]
    },
    {
        id: "leger-opinion",
        title: "Léger Opinion (LÉO)",
        company: "Version 10 • Léger",
        category: "interactive",
        images: [
            require('../../media/legeropinion.jpg')
        ],
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
        images: [
            require('../../media/ibl.jpg')
        ],
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
        images: [
            require('../../media/zone-jeunnesse.jpg')
        ],
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
        images: [
            require('../../media/zoo-granby-lions.jpg')
        ],
        desc_fr: "Développement d'une borne et expérience interactive avec le moteur Unity présentant du contenu éducatif et ludique dans le pavillon de la zone des lions au Zoo de Granby.",
        desc_en: "Engineered an interactive educational kiosk experience built with Unity and installed in the Lions Zone exhibit at the Granby Zoo.",
        tech: ["Unity", "C#", "Interactive Kiosk"]
    },
    {
        id: "une-autre-histoire",
        title: "Une autre histoire (Personnages)",
        company: "Version 10 • Radio-Canada",
        category: "web",
        images: [
            require('../../media/une-autre-histoire.jpg')
        ],
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
        images: [
            require('../../media/explora.jpg')
        ],
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
        images: [
            require('../../media/artv.jpg')
        ],
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
        images: [
            require('../../media/clash.jpg')
        ],
        desc_fr: "Développement front-end du portail web officiel de la série quotidienne « Clash » diffusée sur Vrak TV, regroupant vidéos, fiches de personnages et résumés d'épisodes.",
        desc_en: "Front-end development for the official web portal of Vrak TV's daily drama series 'Clash', featuring video streaming, character profiles, and episode guides.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "on-joue-au-docteur",
        title: "On joue au docteur (Canal Vie)",
        company: "Version 10 • Canal Vie",
        category: "web",
        images: [
            require('../../media/on-joue-au-docteur.jpg')
        ],
        desc_fr: "Développement front-end du site web officiel de l'émission « On joue au docteur » diffusée sur les ondes de Canal Vie.",
        desc_en: "Front-end development for the official companion website of Canal Vie's television show 'On joue au docteur'.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "max-et-livia",
        title: "Max et Livia (Vrak TV)",
        company: "Version 10 • Vrak TV",
        category: "web",
        images: [
            require('../../media/max-et-livia.jpg')
        ],
        desc_fr: "Développement front-end du site web officiel de la populaire série télévisée « Max et Livia ».",
        desc_en: "Front-end web development for the hit television comedy series 'Max et Livia'.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    },
    {
        id: "fous-des-bateaux",
        title: "Fous des bateaux",
        company: "Version 10",
        category: "web",
        images: [
            require('../../media/fous-des-bateaux.jpg')
        ],
        desc_fr: "Développement front-end du site web de l'émission télévisée « Fous des bateaux ».",
        desc_en: "Front-end web development for the television series 'Fous des bateaux'.",
        tech: ["PHP Twig", "JavaScript", "jQuery", "HTML5", "SCSS"]
    }
];

const Portfolio = () => {
    const { t } = useTranslation();
    const { state, actions } = useAppContext();

    const [activeFilter, setActiveFilter] = useState('all');
    const [slideIndices, setSlideIndices] = useState({});
    const [lightboxState, setLightboxState] = useState({
        isOpen: false,
        images: [],
        photoIndex: 0
    });

    useEffect(() => {
        actions.setPageName('Portfolio');
    }, [actions]);

    const getSlideIndex = (projectId) => slideIndices[projectId] || 0;

    const handlePrevSlide = (e, project) => {
        e.stopPropagation();
        const current = getSlideIndex(project.id);
        const total = project.images.length;
        setSlideIndices(prev => ({
            ...prev,
            [project.id]: (current + total - 1) % total
        }));
    };

    const handleNextSlide = (e, project) => {
        e.stopPropagation();
        const current = getSlideIndex(project.id);
        const total = project.images.length;
        setSlideIndices(prev => ({
            ...prev,
            [project.id]: (current + 1) % total
        }));
    };

    const handleSelectSlide = (e, projectId, idx) => {
        e.stopPropagation();
        setSlideIndices(prev => ({
            ...prev,
            [projectId]: idx
        }));
    };

    const openLightbox = (project, index) => {
        setLightboxState({
            isOpen: true,
            images: project.images,
            photoIndex: index
        });
    };

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
                    {filteredProjects.map((project) => {
                        const currentIdx = getSlideIndex(project.id);
                        const hasMultipleImages = project.images.length > 1;

                        return (
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
                                    onClick={() => openLightbox(project, currentIdx)}
                                >
                                    <img
                                        className="project-image"
                                        src={project.images[currentIdx]}
                                        alt={`${project.title} - ${currentIdx + 1}`}
                                        loading="lazy"
                                    />

                                    <div className="zoom-image-btn">
                                        <FontAwesomeIcon icon={faSearchPlus} />
                                        <span>{t('zoom-image')}</span>
                                    </div>

                                    {hasMultipleImages && (
                                        <>
                                            <button
                                                type="button"
                                                className="carousel-arrow carousel-arrow-left"
                                                onClick={(e) => handlePrevSlide(e, project)}
                                                aria-label="Previous image"
                                            >
                                                <FontAwesomeIcon icon={faChevronLeft} />
                                            </button>
                                            <button
                                                type="button"
                                                className="carousel-arrow carousel-arrow-right"
                                                onClick={(e) => handleNextSlide(e, project)}
                                                aria-label="Next image"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </button>
                                            <div className="carousel-dots">
                                                {project.images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        className={`carousel-dot ${idx === currentIdx ? 'active' : ''}`}
                                                        onClick={(e) => handleSelectSlide(e, project.id, idx)}
                                                        aria-label={`Slide ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="carousel-counter">
                                                {currentIdx + 1} / {project.images.length}
                                            </span>
                                        </>
                                    )}
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
                        );
                    })}
                </div>
            </div>

            {lightboxState.isOpen && lightboxState.images.length > 0 && (
                <Lightbox
                    mainSrc={lightboxState.images[lightboxState.photoIndex]}
                    nextSrc={
                        lightboxState.images.length > 1
                            ? lightboxState.images[(lightboxState.photoIndex + 1) % lightboxState.images.length]
                            : undefined
                    }
                    prevSrc={
                        lightboxState.images.length > 1
                            ? lightboxState.images[(lightboxState.photoIndex + lightboxState.images.length - 1) % lightboxState.images.length]
                            : undefined
                    }
                    onCloseRequest={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
                    onMovePrevRequest={() =>
                        setLightboxState(prev => ({
                            ...prev,
                            photoIndex: (prev.photoIndex + prev.images.length - 1) % prev.images.length
                        }))
                    }
                    onMoveNextRequest={() =>
                        setLightboxState(prev => ({
                            ...prev,
                            photoIndex: (prev.photoIndex + 1) % prev.images.length
                        }))
                    }
                />
            )}
        </motion.div>
    );
};

export default Portfolio;
