import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

export default function Carrousel({ texto, press = 'oa'  }) {

    return (
      <SafeAreaProvider>
        <SafeAreaView>
            <ScrollView horizontal={true}>
                <View>
                <Text onPress={press}>{texto}</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                <Text>texto</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }


const styles = StyleSheet.create({})