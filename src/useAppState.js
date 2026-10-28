import React, { useState, useContext, useMemo } from 'react';
import i18n from "i18next";
import Cookies from 'js-cookie';

const AppContext = React.createContext({});

const defaultLang = Cookies.get('lang') || 'en';

const initialState = {
    pageName: "",
    lang: defaultLang,
};

const useAppState = () => {
    const [state, setState] = useState(initialState);
    const actions = useMemo(() => getActions(setState), [setState]);

    return { state, actions };
};

const getActions = setState => ({
    setPageName: (name) => {
        setState(state => ({ ...state, pageName: name }));
    },
    changeLang: (lang) => {
        setState(state => ({ ...state, lang: lang }));
        i18n.changeLanguage(lang);
        Cookies.set('lang', lang, { expires: 90 });
    }
});

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppContext, useAppState, useAppContext };
