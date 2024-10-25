import { Text, StyleSheet, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Form from '../componentes/form'

const Stack = createNativeStackNavigator();


export default function Prueba({navigation}) {
    return(
       
                <View style={styles.div}>
                    <Text style={styles.text}>ansdioasdiapn</Text>
                    <Form></Form>
            </View>

    );
}

const styles = StyleSheet.create({
    div:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text:{
      color: '#fff',
    },
})