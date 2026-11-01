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
        title: "ICITÉ — Enterprise Learning Management System (LMS)",
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
        desc_fr: "Plateforme d'apprentissage en ligne (LMS) d'entreprise conçue de A à Z et maintenue au quotidien, desservant chaque jour plus de 500 courtiers du réseau d'Intact Assurance ainsi que les souscripteurs et les employés internes. Architecture full-stack complète (React.js, TypeScript, Node.js, GraphQL) gérant les parcours d'apprentissage interactifs, le suivi de progression en temps réel, la délivrance automatisée de certificats d'accréditation et l'authentification sécurisée.",
        desc_en: "Enterprise online Learning Management System (LMS) architected from the ground up and actively maintained, serving 500+ active brokers across the Intact Insurance brokerage network as well as underwriters and internal employees every day. Full-stack architecture (React.js, TypeScript, Node.js, GraphQL) powering interactive learning paths, real-time progress tracking, automated accreditation certificates, and secure authentication.",
        url: "https://icite.intactfc.com/",
        tech: ["React.js", "TypeScript", "Node.js", "GraphQL", "MySQL"]
    },
    {
        id: "icite-admin",
        title: "ICITÉ — Administration Portal & Integrated Custom CMS",
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
        desc_fr: "Portail d'administration complet et système de gestion de contenu (CMS) sur mesure intégré de l'écosystème ICITÉ. Permet aux gestionnaires de formation de créer et publier des parcours et modules, et d'administrer au quotidien les inscriptions, les cohortes, les classes virtuelles, les sondages, les certificats, les permissions d'accès (RBAC) et les rapports analytiques en temps réel, réduisant de 70 % le temps de gestion manuelle.",
        desc_en: "Comprehensive administration portal and custom-engineered Content Management System (CMS) for the ICITÉ ecosystem. Enables training managers to author and publish learning paths and modules, and centralizes daily management of participant registrations, cohorts, virtual classrooms, surveys, certificates, role-based access control (RBAC), and real-time analytics reports—reducing manual administration overhead by 70%.",
        url: "https://admin.icite.intactfc.com/",
        tech: ["React.js", "TypeScript", "Node.js", "GraphQL", "Custom CMS", "RBAC"]
    },
    {
        id: "intact-underwriter-tools",
        title: "Underwriter Workflow & Operational Web Tools Suite",
        company: "Intact Insurance",
        category: "fullstack",
        images: [
            require('../../media/outils-intact-accueil.jpg')
        ],
        desc_fr: "Portail centralisé et suite d'applications web métiers développés et maintenus pour assister chaque jour des centaines de souscripteurs et de courtiers dans l'automatisation de calculs complexes, l'évaluation des risques et l'exécution de leurs flux opérationnels critiques.",
        desc_en: "Centralized hub and suite of mission-critical internal web applications developed and maintained for hundreds of underwriters and brokers who rely on them every day to automate complex policy calculations, risk assessments, and specialized operational workflows.",
        url: "https://experiencedeveloppement.intactfc.com/outils/accueil/",
        tech: ["React.js", "TypeScript", "Node.js", "REST & GraphQL APIs"]
    },
    {
        id: "leger-opinion",
        title: "Léger Opinion (LÉO) — Cross-Platform Web & Mobile App",
        company: "Version 10 • Léger Marketing",
        category: "interactive",
        images: [
            require('../../media/legeropinion.jpg')
        ],
        desc_fr: "Plateforme comprenant un portail web ainsi qu'une application mobile multiplateforme (Web, iOS et Android) permettant à des dizaines de milliers de panélistes à travers le Canada de répondre aux sondages Léger et de gérer leurs récompenses.",
        desc_en: "Cross-platform web portal and mobile application (Web, iOS, and Android) serving tens of thousands of active panelists across Canada to complete Léger surveys, track points, and redeem rewards.",
        url: "https://www.legeropinion.com/",
        tech: ["Angular", "TypeScript", "REST APIs"]
    },
    {
        id: "indice-bonheur-leger",
        title: "Indice du bonheur Léger — Interactive Analytics Platform",
        company: "Version 10 • Léger Marketing",
        category: "web",
        images: [
            require('../../media/ibl.jpg')
        ],
        desc_fr: "Plateforme web interactive à fort trafic permettant aux utilisateurs de répondre à trois questionnaires spécialisés pour calculer, visualiser et suivre leur indice de bonheur personnel, leur indice d'humeur et leur indice de bonheur au travail.",
        desc_en: "High-traffic interactive web platform where users complete three specialized assessment questionnaires to calculate, visualize, and track their personal happiness index, mood index, and workplace happiness index.",
        url: "https://indicedebonheur.com/",
        tech: ["JavaScript", "Custom CMS", "HTML / CSS"]
    },
    {
        id: "radio-canada-media-platforms",
        title: "ICI Explora & ICI ARTV — National Media Web Portals",
        company: "Version 10 • Radio-Canada",
        category: "web",
        images: [
            require('../../media/explora.jpg'),
            require('../../media/artv.jpg')
        ],
        desc_fr: "Architecture front-end et refonte complète des portails web officiels des chaînes télévisées spécialisées ICI Explora et ICI ARTV de Radio-Canada, propulsés par un gestionnaire de contenu (CMS) sur mesure à fort trafic.",
        desc_en: "Front-end architecture and full redesign of the official high-traffic web portals for Radio-Canada's specialty television networks ICI Explora and ICI ARTV, powered by a custom content management system.",
        url: "https://ici.exploratv.ca/",
        tech: ["JavaScript", "Custom CMS", "HTML / CSS"]
    },
    {
        id: "tournee-zone-jeunesse-lu",
        title: "La tournée Zone Jeunesse (LÜ) & Interactive Experiences",
        company: "Version 10 • Radio-Canada & Zoo de Granby",
        category: "interactive",
        images: [
            require('../../media/zone-jeunnesse.jpg'),
            require('../../media/zoo-granby-lions.jpg')
        ],
        video: 'https://ici.radio-canada.ca/tourneezonejeunesse/medias/videos/RC_TourneeZoneJeunesse_2020-generic.mp4',
        desc_fr: "Ingénierie d'applications interactives en temps réel avec Unity et C#, incluant des jeux projetés sur les murs de gymnases avec détection spatiale (LÜ / Radio-Canada) ainsi que des bornes éducatives interactives pour le pavillon des lions au Zoo de Granby.",
        desc_en: "Engineered real-time interactive applications built with Unity and C#, including spatial-detection gymnasium projection games (LÜ / Radio-Canada) and interactive educational kiosk systems for the Granby Zoo.",
        tech: ["C#", "Unity Engine", "Real-Time Interactive Systems"]
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
