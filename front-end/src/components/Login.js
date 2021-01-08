import React, { useContext } from 'react'

import { Context } from '../context/AuthContext'

const Login = () => {

    const { authenticated, handleLogin } = useContext(Context)

    return (
        <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Login