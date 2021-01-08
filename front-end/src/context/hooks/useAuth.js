import { useState, useEffect } from 'react'

import api from '../../api'
import history from '../../history'

const useAuth = () => {
    const [authenticated, SetAuthenticated] = useState(false)
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
    
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            SetAuthenticated(true)
        }
    
        SetLoading(false)
    }, [])
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const { data: {token} } = await api.post('/authenticate')
    
        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`
        SetAuthenticated(true)
        history.push('/users')
    }
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        SetAuthenticated(true)
        history.push('/login')
    }

    return { authenticated, loading, handleLogin, handleLogout }
}

export default useAuth

