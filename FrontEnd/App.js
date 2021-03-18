import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Dashboard from './components/dashboard';
import SignUp from './components/sign-up'
import Login from './components/login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Taskslist from './components/addTasks'

const Stack = createStackNavigator()

export default function App () {
  return (
   
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Register" component={SignUp} />
          <Stack.Screen name="Connexion" component={Login} />
          <Stack.Screen name="TodoList" component={Taskslist} />


        </Stack.Navigator>
      </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({
  title:{
    alignSelf: 'center',
    fontWeight: 'bold'
 },

 container: {
   paddingTop: 23
},
input: {
   margin: 15,
   height: 40,
   borderColor: '#7a42f4',
   borderWidth: 1
},
ConnexionButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 40,
},
ConnexionButtonText:{
   color: 'white'
}
});
