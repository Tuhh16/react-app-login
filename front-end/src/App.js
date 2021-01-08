import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Router } from 'react-router-dom'

import Routes from './routes'
import history from './history'

import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  )
}

export default hot(App);