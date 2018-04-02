import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';
var otpStyle = require('../../Styles/OtpPage/otpPage.js')
export default class Page2 extends Component {

  _onFulfill(code) {
    //console.log('done');
    alert("done "+ code)
  }


  render() {
    return (
        <View style={otpStyle.view1}>
          <View style={otpStyle.view2}>
            <Text style={otpStyle.view3}>Verify your mobile</Text>
            <Text style={otpStyle.view4}>Enter your OTP here</Text>
          </View>
          <CodeInput
              ref="codeInputRef1"
              secureTextEntry
              className='border-circle'
              space={5}
              size={30}
              activeColor='rgba(49, 180, 4, 1)'
              inactiveColor='#5369ad'
              inputPosition='center'
              onFulfill={(code) => this._onFulfill(code)}
            />
        </View>
    )
  }
}
