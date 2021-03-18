
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';



export default function Login({navigation}) {
    return (
      <View style = {styles.container}>
            <Text style ={styles.title}>Connexion</Text>
            
            
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
            
            <TouchableOpacity
               style = {styles.ConnexionButton}>
               <Text 
               style = {styles.ConnexionButtonText}
               onPress={() => navigation.navigate('TodoList')}>
               Connexion </Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text 
                  style = {styles.title}
                  onPress={() => navigation.navigate('Register')}>
                     Vous n'avez pas de compte ?Veuillez en crée un ici.
                </Text>
            </TouchableOpacity>
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
    alignSelf: 'center'
 }
 
  });
