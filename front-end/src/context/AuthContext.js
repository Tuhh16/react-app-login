import React, { createContext } from 'react'

import useAuth from './hooks/useAuth'

const Context = createContext()

const AuthProvider = ({ children }) => {

    const { authenticated, loading, errobackend, handleLogin, handleLogout } = useAuth()

    return(
        <Context.Provider value={{
            authenticated,
            loading,
            errobackend,
            handleLogin,
            handleLogout
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }