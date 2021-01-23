import { useState, useEffect } from 'react'

import api from '../../api'
import history from '../../history'

const useAuth = () => {
    const [authenticated, SetAuthenticated] = useState(false)
    const [errobackend, SetErrobackend] = useState('')
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
    
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            SetAuthenticated(true)
        }
    
        SetLoading(false)
    }, [])
    
    const handleLogin = async (values) => {
        
        const { email, password } = values

        try {
            
            const { data: {token} } = await api.post('/authenticate', {email, password})
    
            localStorage.setItem('token', JSON.stringify(token))
            api.defaults.headers.Authorization = `Bearer ${token}`
            SetAuthenticated(true)
            SetErrobackend('')
            history.push('/users')
        
        } catch (err) {

            return SetErrobackend(err.response.data)
        
        }
        
    }
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        SetAuthenticated(false)
        history.push('/login')
    }

    return { authenticated, loading, errobackend, handleLogin, handleLogout }
}

export default useAuth

