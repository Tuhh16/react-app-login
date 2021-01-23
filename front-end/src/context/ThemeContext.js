import React, { createContext, useState, useEffect } from 'react'

const initialState = {
    dark: false,
    theme: 'light',
    toggle: () => {}
}

const ThemeContext = createContext(initialState)

const ThemeProvider = ({ children }) => {

    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    const SwitchTheme = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    
    const theme = dark ? 'dark' : 'light'

    document.querySelector("body").className = theme;

    return(
        <ThemeContext.Provider value={{
            dark,
            theme,
            SwitchTheme
            }}
        >
             {children}
        </ThemeContext.Provider>   
    )

}

export { ThemeContext, ThemeProvider }