import React, { Component } from 'react'
import Login from './Pages/Login';
import Home from './Pages/Home'
import PinPage from './Pages/PinPage';
import { Router, Stack, Scene } from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene hideNavBar key="login" inital component={Home} title="Login"/>
          <Scene hideNavBar key="pinpage" component={PinPage} title="PinPage"/>
       
        </Stack>
    </Router>
    )
  }
}