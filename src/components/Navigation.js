import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from "../useAppState";
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();
    const { state, actions } = useAppContext();
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const closeMenu = () => {
        setDisplayMobileMenu(false);
    };

    const changeLangHandler = (e) => {
        e.preventDefault();
        if (state.lang === "fr") {
            actions.changeLang('en');
        } else {
            actions.changeLang('fr');
        }
    };

    return (
        <header className="menu">
            <div className="desktop-menu">
                <Link to="/portfolio-developer" className="menu-name">
                    Carlos <span className="last-name">Hernandez</span>
                </Link>

                <nav>
                    <Link
                        to="/portfolio-developer"
                        className={state.pageName === "Home" ? 'menu-page-active' : ''}
                    >
                        {t('menu-home')}
                    </Link>
                    <Link
                        to="/portfolio-developer/portfolio"
                        className={state.pageName === "Portfolio" ? 'menu-page-active' : ''}
                    >
                        {t('menu-portfolio')}
                    </Link>
                    <button
                        className="lang-selector"
                        onClick={changeLangHandler}
                        aria-label="Switch language"
                    >
                        {state.lang === "fr" ? "EN" : "FR"}
                    </button>
                </nav>
            </div>

            <div className="mobile-menu">
                <Link to="/portfolio-developer" className="menu-name" onClick={closeMenu}>
                    Carlos <span className="last-name">Hernandez</span>
                </Link>

                <FontAwesomeIcon
                    onClick={() => setDisplayMobileMenu(prev => !prev)}
                    icon={displayMobileMenu ? faTimes : faBars}
                    className="burger-icon"
                />

                <nav className={'mobile-nav ' + (displayMobileMenu ? 'mobile-nav-visible' : 'mobile-nav-hidden')}>
                    <Link to="/portfolio-developer" onClick={closeMenu}>{t('menu-home')}</Link>
                    <Link to="/portfolio-developer/portfolio" onClick={closeMenu}>{t('menu-portfolio')}</Link>
                    <button
                        className="lang-selector"
                        onClick={(e) => {
                            changeLangHandler(e);
                            closeMenu();
                        }}
                    >
                        {state.lang === "fr" ? "EN" : "FR"}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
