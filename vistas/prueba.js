import { Text, StyleSheet, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Obo from './login'

export default function Prueba({navigation}) {
    return(
        <View>
            <Text>
                no se amigo posta no se
            </Text>
           <Button
           title="ayuda"
           onPress={()=> navigation.navigate('Obo')}></Button>
        </View>
    );
}
