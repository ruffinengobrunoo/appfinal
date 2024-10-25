import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

export default class Carrousel extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
            <ScrollView horizontal={true}>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
            </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({})