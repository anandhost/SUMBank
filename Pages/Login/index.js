import React from 'react';
import { StyleSheet, View, TouchableHighlight, Alert } from 'react-native';
import TouchID from 'react-native-touch-id'
import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Form,Item, Button, Label, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
const optionalConfigObject = {
  title: "Authentication Required",
  color: "#e00606"
}
//import styles from '../touchidtest/src/styles.js'


export default class Login extends React.Component {


  state = {
    text:'not pressed',
    touchId: true,
    auth: false,
    pinInput: '',
    showToast: false,
    error:false,
    errorText:'qweqwe'
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
	  };



render() {
	
//	var content = this.loginForm()
	console.log(this.state.pinInput)
    return (
      <Container style={ styles.container }>
        
        <View style={ styles.semicircle }>
          
        </View>

        <View style={{ marginTop:100, position:'absolute', top: 50, alignContent:'center', alignItems:'center' }}>
            <Text style={styles.headingh1}>SUM</Text>
            <Text style={styles.headingsub}>VENTURES</Text>
        </View>


        <Content style={ styles.wrapper }>
          { this.state.error ? 
          <View style={{ backgroundColor:'red', padding:10, borderRadius:5, color:"#fff"}}>
            <Text style={{ color: '#fff'}}>{this.state.errorText}</Text>
          </View> : null }

          <Form >
            
            <Item>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              
              <Input
                onChangeText={(data) => this.setState({ pinInput: data})}
                secureTextEntry={true}
                placeholder={"PIN"} />
              </InputGroup>
            </Item>
         
            
          </Form>
          <View style={{ padding:10 }}>
          <Button onPress={this.loginHandler} disabled={this.state.pinInput === '' } style={{ backgroundColor:'#5369ad'}} full>
              <Text>Login</Text>

          </Button>

          {this.state.touchId ? 
            <View style={{  alignContent:'center', marginTop:40 }}>
              <Button onPress={this._touchIdPressHandler} full light>
              <Icon name='ios-finger-print' />
                  <Text>Use TouchID</Text>
              </Button>
            </View> : null }
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  semicircle: {
    width: 300,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#5369ad',
    top:-50,
    alignItems:'center',
    transform: [
      {scaleX: 2}
    ],
    position:'absolute'
  },

  wrapper: {
    marginTop:400
  },

  headingh1: {
    fontSize:40,
    color:'#fff',
    fontWeight:'800',
  },

  headingsub: {
    fontSize:20,
    color:'#fff'
  }
});

