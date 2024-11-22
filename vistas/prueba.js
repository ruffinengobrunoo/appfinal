// prueba de front antes de usar navigation drawer

import { Text, StyleSheet, Button, TextInput, TouchableOpacity, View } from "react-native";
import { React } from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Carrousel from '../componentes/Carrousel'
import Navegar from '../navigation/App'
import Boton from '../componentes/Boton'

import LogIn from './login'
import SignIn from './signIn'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Prueba({ navigation }) {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Iniciar sesión" component={LogIn}/>
      <Drawer.Screen name="Crear cuenta" component={SignIn}/>
      <Navegar></Navegar>
    </Drawer.Navigator>
    
  );
}



const styles = StyleSheet.create({
  
})
