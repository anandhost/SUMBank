var React = require('react-native');
import { StyleSheet } from 'react-native';


var loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding:0,
      backgroundColor: '#fff',
      flexDirection:'column'
      //alignItems: 'flex-start',
      //justifyContent: 'center',
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
      //flex:1
      // marginTop:200
    },
  
    headingh1: {
      fontSize:40,
      color:'#fff',
      fontWeight:'800',
    },
  
    headingsub: {
      fontSize:20,
      color:'#fff'
    },
    view1:{
        alignContent:'center',
         alignItems:'center',
         backgroundColor:'#5369ad',
         height:200,
         justifyContent:'center',
         flexDirection:'row',
         flex:1 
    },
    view2:{
        alignContent:'center',
        alignItems:'center'
    },
    errorView:{
        backgroundColor:'red',
        padding:10,
        borderRadius:5,
        color:"#fff"
    },
    errorText:{
        color: '#fff'
    },
    form:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    view3:{
        flex:1,
        flexDirection:'row',
        padding:30
    },
    view4:{
        alignContent:'center',
        marginTop:40 
    },
    bColor:{
      backgroundColor:'#5369ad'
    }
  });

  module.exports = loginStyles;