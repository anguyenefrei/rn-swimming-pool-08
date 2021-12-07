import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextComponent} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const First = ({ navigation }) => {
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput placeholder="Entrez quelque chose" style={styles.input} value={text} onChangeText={changeHandler}/>
      <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Second',
      {
        item: {text},
        
      }
      )}>First Page</Text>
      
    </View>
  );
}
const Second = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'red'}}>{item.text}</Text>
      <Text style={{color: 'blue'}} onPress={() => navigation.navigate('First')}>Second Page</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center'
  }
});
