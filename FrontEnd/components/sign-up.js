import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function SignUp({navigation}) {
    return (
      <View style = {styles.container}>
            <Text style ={styles.title}>S'inscrire</Text>
            
            <TextInput style = {styles.input}
               placeholder = "    Nom"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />

            <TextInput style = {styles.input}
               placeholder = "    Prénom"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            
            <TextInput style = {styles.input}
               placeholder = "    Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            
            <TextInput secureTextEntry={true}style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "    Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />

            <TextInput secureTextEntry={true}style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "   Confirm Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />

            <TextInput style = {styles.input}
               placeholder = "   Homme/Femme/NA"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            
            <TouchableOpacity
               style = {styles.ConnexionButton}
               onPress={() => navigation.navigate('TodoList')}>
               <Text style = {styles.ConnexionButtonText}> Valider </Text>
            </TouchableOpacity>

            
            
                <Text
                style = {styles.title}
                onPress={() => navigation.navigate('Connexion')}>
                     Avez vous déja un compte? Veuillez cliquer ici.
                </Text>
            
         </View>
   
  );
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
 