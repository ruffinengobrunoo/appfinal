import { StyleSheet, Text, TextInput } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import React from 'react'

export default signIn = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
       
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Nombre"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
           <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Apellido"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Correo Electrónico"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
        
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



const styles = StyleSheet.create({

})