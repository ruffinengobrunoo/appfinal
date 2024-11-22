// prueba de front antes de usar navigation drawer

import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


import LogIn from '../vistas/HomeScreen'
import SignIn from '../vistas/signIn'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Iniciar sesión" component={LogIn}/>
      <Drawer.Screen name="Crear cuenta" component={SignIn}/>
    </Drawer.Navigator>
  );
}



const styles = StyleSheet.create({
  
})
