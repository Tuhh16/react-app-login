import { hot } from 'react-hot-loader/root';
import React from 'react';
import Login from './components/Login'
import Usuarios from './components/Usuarios'

const App = () => (
  <div className="container">
    <div className="row">
      {<Login/>}
      {/*<Usuarios/>*/}
    </div>
  </div>
)

export default hot(App);