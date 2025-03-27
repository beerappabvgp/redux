import React from 'react'
import { useTheme } from './ThemeContext'

export const SecondComponent = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div>
        <h1>Theme from second component</h1>
        <p>Theme is: {theme}</p>
    </div>
  )
}

