import React, { useState, useContext } from 'react';

const LanguageContext = React.createContext();
const LanguageUpdateContext = React.createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
}

export const useLanguageUpdate = () => {
    return useContext(LanguageUpdateContext);
}

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("english");

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return (
        <LanguageContext.Provider value={language}>
            <LanguageUpdateContext.Provider value={changeLanguage}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;