import React, { createContext, useContext, useState } from 'react'


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark": "light");
    }
    return (
        // It exposes the data to other components to use 
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
}


