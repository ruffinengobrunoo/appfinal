import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class inicio extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>este es el inicio zarpado en cheto</Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text:{
        color:'#fff',
    },
})