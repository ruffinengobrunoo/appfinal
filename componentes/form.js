import React from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

export default function TextInputExample () {
    const [text, onChangeText] = React.useState('');
    
  
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
  );
};
  
  const styles = StyleSheet.create({
    input: {
    color: '#E3E4DB',
    height: 40,
    width: 350,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#F18805',
    padding: 10,
    textAlign: 'left',
    fontSize: 20,
    },
  })
