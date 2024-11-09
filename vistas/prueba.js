import { Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { React } from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'




const Stack = createNativeStackNavigator();


export default function Prueba({ navigation }) {

  // const [nombre, setNombre] = useState('');
  // const [apellido, setApellido] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [text, onChangeText] = useState('');

  // const handleSubmit = async () => {
  //     if (!nombre || !apellido || !email || !password) {
  //         Alert.alert('Error', 'Por favor, completa todos los campos');
  //         return;
  //     }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={styles.text}>Bienvenido</Text>
        <Text style={styles.titulo}>Crear cuenta</Text>
        {/* <Form></Form> */}


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
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Contraseña"
          placeholderTextColor={'#E3E4DB'}
          value={text}
        />
        
        <TouchableOpacity  style={styles.nav}>texto</TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    padding: 40,
  },
  text: {
    color: '#fff',
  },
  input: {
    color: '#E3E4DB',
    height: 40,
    width: 350,
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#F18805',
    textAlign: 'left',
    fontSize: 20,
    },
  nav:{
    color: '#F18805',
    paddingTop: 15,
  },
  titulo:{
    color: '#F18805',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 30,
  },
  
})
