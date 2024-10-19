import { Text, StyleSheet, View, Button } from 'react-native';

export default function Enlaces({navigation}) {
    return (
      <View>
        <Text>jalisjalsj</Text>
        <Button style={styles.link} 
        tittle="hkhkjhjk"
        onPress={() => navigation.navigate()}></Button>
      </View>
    );
  }


const styles = StyleSheet.create({
  link:{
    color: '#F18805',
  },
})