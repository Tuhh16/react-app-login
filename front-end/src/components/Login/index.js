import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

import { Context } from '../../context/AuthContext'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('E-mail Invalido!').required('E-mail obrigatório!'),
    password: Yup.string().required('Senha obrigatória!')
});

const Login = () => {

    const { errobackend, handleLogin } = useContext(Context)

    const {
        register, 
        handleSubmit, 
        errors, 
        formState: { isDirty, isValid },
    } 
    = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginSchema)
    })
    
    return (
        <div className="form">
            <h2>Login</h2>
            {errobackend && <span className="error">{errobackend}</span>}
            <form onSubmit={handleSubmit( values => handleLogin(values))}>
            <input
                ref={register}
                id="email"
                name="email"
                type="text"
                placeholder="E-mail"
            />
            {errors.email && <span className="error">{errors.email.message}</span>} 
            <input
                ref={register}
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
            />
            {errors.password && <span className="error">{errors.password.message}</span>} 
            <button type="submit" disabled={!isDirty || !isValid}>Log in</button>
            </form>
        </div>
    )
}

export default Login