import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Router } from 'react-router-dom'

import Routes from './routes'
import history from './history'


import { ThemeProvider } from './context/ThemeContext'
import Container from './container/'
import { AuthProvider } from './context/AuthContext'


const App = () => {

  return (
    <ThemeProvider>
        <Container>
          <AuthProvider>
              <Router history={history}>
                <Routes />
              </Router>
          </AuthProvider>
        </Container>
    </ThemeProvider>
  )
}

export default hot(App);