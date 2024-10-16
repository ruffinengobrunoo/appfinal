import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class enlaces extends Component {
  render() {
    return (
      <View style={styles.view}>

        <Text style={styles.texto}> texto <Button style={styles.link}
          texto="cheto"
          onPress={() => navigation.navigate("")}
        /> </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: '#fff',
  },
  link:{
    color: '#F18805',
  },
})