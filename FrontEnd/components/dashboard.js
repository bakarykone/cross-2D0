import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default function Dashboard({navigation}) {
    return (
    <View style = {styles.container}>
        
        <Text style ={styles.title}>Bienvenue dans l'application</Text>

    
            <TouchableOpacity style = {styles.ConnexionButton}>
                    <Text onPress={() => navigation.navigate('Connexion')} 
                        style = {styles.ConnexionButtonText}> Connexion 
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.ConnexionButton}>
                    <Text onPress={() => navigation.navigate('Register')} 
                        style = {styles.ConnexionButtonText}> S'inscrire 
                    </Text>
            </TouchableOpacity>
       
    
    </View>

       
  );
} 


const styles = StyleSheet.create({

    container: {
        paddingTop: 200
     },

    title:{
     alignSelf: 'center',
     fontWeight: 'bold',
     
    },
   
    ConnexionButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
    },
    
    ConnexionButtonText:{
     color: 'white'
   },

 

});