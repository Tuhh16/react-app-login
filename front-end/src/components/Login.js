import React from 'react'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('foi');
    }

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