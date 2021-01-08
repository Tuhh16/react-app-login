import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from './context/AuthContext'

import Login from './components/Login'
import Users from './components/Users'

const CustomRoute = ({ isPrivate, ...rest }) => {
    const { loading, authenticated } = useContext(Context)

    if(loading) {
        return <h1>Loading ...</h1>
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}


const Routes = () => {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute isPrivate exact path="/users" component={Users} />
        </Switch>
    )
}

export default Routes