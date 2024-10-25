import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './navigation/gesture-handler';

// import TopTab from './navigation/TopTab'

import Prueba from "./vistas/prueba"


const Stack = createNativeStackNavigator();

// const Home = () =>{
//   return(
//     <NavigationContainer>
//       <TopTab></TopTab>
//     </NavigationContainer>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Prueba">
        <Stack.Screen name="Prueba" component={Prueba} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

