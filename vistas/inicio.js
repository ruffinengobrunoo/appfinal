import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

import SignIn from './signIn'
import Login from "./login"
import { NavigationContainer } from '@react-navigation/native'

export default class inicio extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>este es el inicio zarpado en cheto</Text>
        <Button style={styles.link}
        title="oooaaaaa"
        onPress={() => NavigationContainer}>
        </Button>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text:{
        color:'black',
    },
    link:{
      color: '#F18805',
    },
})
