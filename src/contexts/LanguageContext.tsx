/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext<{ language: string, updateLanguage: (newLanguage: string) => void }>({ language: '', updateLanguage: () => { } });

export function useLanguageContext() {
    return useContext(LanguageContext);
}

export default function LanguageProvider(props: { children: ReactNode }) {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(() => {
        const language = localStorage.getItem('language') ?? 'en'
        i18n.changeLanguage(language)
        return language
    });
    const updateLanguage = (newLanguage: string) => {
        setLanguage(() => {
            localStorage.setItem('language', newLanguage)
            i18n.changeLanguage(newLanguage)
            return newLanguage
        })
    }

    return (
        <LanguageContext.Provider value={{ language, updateLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}