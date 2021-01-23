import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Container = ({ children }) => {

    const { dark, theme, SwitchTheme } = useContext(ThemeContext)

    return (
        <div>
            <button className={theme} onClick={SwitchTheme}>Change to {!dark ? 'Dark' : 'Light'} Theme</button>
            {children}
        </div>
    )
}

export default Container