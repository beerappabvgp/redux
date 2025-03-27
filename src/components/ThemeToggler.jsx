import { useContext } from 'react';
import { ThemeContext, useTheme } from './ThemeContext'

export const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme - ({theme})</button>
        </div>
    )
}

