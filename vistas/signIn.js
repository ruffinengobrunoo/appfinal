import { StyleSheet, Text, TextInput } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import React from 'react'

export default signIn = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput></TextInput>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



const styles = StyleSheet.create({

})