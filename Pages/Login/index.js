import React from 'react';
import { StyleSheet, View, TouchableHighlight, Alert, ScrollView } from 'react-native';
import TouchID from 'react-native-touch-id'
import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Form,Item, Button, Label, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
var loginStyle = require('../../Styles/Login/login.js');
import RNAccountKit, {
  LoginButton,
  Color,
  StatusBarStyle,
} from 'react-native-facebook-account-kit'
const optionalConfigObject = {
  title: "Authentication Required",
  color: "#e00606"
}
const api_version = "v1.0";
const app_id = 162405777803326;
const app_secret = "eee0f04074769e8eb370215c11d82405";
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.0/me';
const token_exchange_base_url = 'https://graph.accountkit.com/v1.0/access_token'; 
//import styles from '../touchidtest/src/styles.js'



export default class Login extends React.Component {


  state = {
    text:'not pressed',
    touchId: true,
    auth: false,
    pinInput: '',
    showToast: false,
    error:false,
    errorText:'qweqwe',
    phoneCountryCode: '+91',
    phoneNumber:null,
    authToken: null,
    loggedAccount: null

  }
  
constructor(props) {
    super(props);
    this._touchIdPressHandler = this._touchIdPressHandler.bind(this);
}

componentDidMount() {
    // To check if TouchId is supported

    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
            console.log('FaceID is supported.');
        } else {
            console.log('TouchID is supported.');
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
        this.setState({
          touchId: false
        })
      });
}
componentWillMount(){
  RNAccountKit.getCurrentAccessToken()
      .then((token) => {
      if (token) {
          RNAccountKit.getCurrentAccount()
              .then((account) => {
                  this.setState({
                  authToken: token,
                  loggedAccount: account
              })
          })
      } else {
          console.log('No user account logged')
      }
  })
  .catch((e) => console.log('Failed to get current access token', e))

}
onLogin(token) {
  if (!token) {
    console.warn('User canceled login')
    this.setState({})
  } else {
    RNAccountKit.getCurrentAccount()
      .then((account) => {
        this.setState({
          authToken: token,
          loggedAccount: account
        })
      })
  }
}
onLoginError(e) {
  console.log('Failed to login', e)
}
onLoginPhonePressed() {
  RNAccountKit.loginWithPhone()
    .then((token) => { this.onLogin(token) })
    .catch((e) => this.onLoginError(e))
}
onLogoutPressed() {
  AccountKit.logout()
    .then(() => {
      this.setState({
        authToken: null,
        loggedAccount: null
      })
    })
    .catch((e) => console.log('Failed to logout'))
}


loginHandler() {
  console.log('loggedIn');
  Actions.page2();
}

_touchIdPressHandler() {
    //to authenticate
    TouchID.authenticate('To access SUM app', optionalConfigObject)
      .then(success => {
        //AlertIOS.alert('Authenticated Successfully');
        console.log(success)
        this.loginHandler();
        //this.setState({ text: 'Authenticated Successfully', auth: true})
      })
      .catch(error => {
        //AlertIOS.alert('Authentication Failed');
        Alert.alert('Authentication Failed')
        console.log(error);
        this.setState({
          error: true,
          errorText: error.message
        })
        //this.setState({ text:error.message})

      });
    }
    


render() {
	
//	var content = this.loginForm()
	console.log(this.state.pinInput)
    return (
      <ScrollView style={ loginStyle.container }>
        
      
        <View style={loginStyle.view1}>
          <View style={loginStyle.view2} >
            <Text style={loginStyle.headingh1}>SUM</Text>
            <Text style={loginStyle.headingsub}>VENTURES</Text>
          </View>
        </View>


        <View style={ loginStyle.wrapper }>
          { this.state.error ? 
          <View style={loginStyle.errorView}>
            <Text style={loginStyle.errorText}>{this.state.errorText}</Text>
          </View> : null }

          <Form style={loginStyle.form}>
            <View style={loginStyle.view3}>

              
                <Input onChangeText={(data) => this.setState({ phoneCountryCode: data})} placeholder="+91" />
             
                <Input onChangeText={(data) => this.setState({ phoneNumber: data})}  placeholder="Mobile number" />
                
            
            </View>
         
            
          </Form>
          
          <View style={{ padding:10 }}>
            <Button onPress={this.loginHandler} disabled={this.state.phoneNumber === null } style={loginStyle.bColor} full>
                <Text>Login</Text>

            </Button>
            {/* <LoginButton style={styles.button} type="phone"
                onLogin={(token) => this.onLogin(token)} onError={(e) => this.onLogin(e)}>
                <Text style={styles.buttonText}>SMS</Text>
            </LoginButton> */}

          {this.state.touchId ? 
            <View style={loginStyle.view4}>
              <Button onPress={this._touchIdPressHandler} full light>
              <Icon name='ios-finger-print' />
                  <Text>Use TouchID</Text>
              </Button>
            </View> : null }
          </View>
        </View>
      </ScrollView>
    );
  }
}



