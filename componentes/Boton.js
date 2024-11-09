import { Button, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

export default function Boton({ press, text = "example" }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View >
                    <Button
                    style={styles.button}
                    tittle={text}
                    onPress={press}></Button>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor
    },
})