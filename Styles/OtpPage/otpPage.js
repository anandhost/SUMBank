var React = require('react-native');
import { StyleSheet } from 'react-native';


var otpStyles = StyleSheet.create({
    view1:{
        flex:1, 
        flexDirection:'column', 
        justifyContent:'space-between', 
        backgroundColor:'#FFF'
    },
    view2:{
        alignItems:'center', 
        backgroundColor:'#FFF', 
        paddingVertical:50 
    },
    view3:{
        fontSize: 22, 
        marginBottom:5
    },
    view4:{
        fontSize: 14 
    }
  });

  module.exports = otpStyles;