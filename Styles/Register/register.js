var React = require('react-native');
import { StyleSheet } from 'react-native';


var RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
      },
      unlockColor:{
        color: '#0A69FE' 
      },
      view1:{
        marginTop:100,
        position:'absolute',
        top: 50,
        alignContent:'center',
        alignItems:'center'
      },
      view2:{
          padding: 10,
      }
    
  });

  module.exports = RegisterStyles;