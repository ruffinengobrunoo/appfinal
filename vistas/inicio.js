import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Enlaces from "../componentes/enlaces"

export default class inicio extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>este es el inicio zarpado en cheto</Text>
        <Enlaces text= "sos CAPOOOOO" onPress={() => navigation.navigate('SignIn')}></Enlaces>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text:{
        color:'#fff',
    },
})