import React, { Component } from 'react'
import Login from './Pages/Login';
// import Page2 from './Pages/Page2';
import { Router, Stack, Scene } from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene hideNavBar key="login" inital component={Login} title="Login"/>
          {/* <Scene hideNavBar key="page2" component={Page2} title="Register"/> */}
       
        </Stack>
    </Router>
    )
  }
}