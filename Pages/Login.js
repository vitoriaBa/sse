import { Text, SafeAreaView, StyleSheet,View,Image,TouchableOpacity,ImageBackground,TouchableWithoutFeedback, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { useFonts} from 'expo-font';


//esse seria o pai
export default function Login() {
  
    const[email, setEmail]= useState('');
    const[senha, setSenha] = useState('');
   // const[user, setUser]= useState('');
  
  
    const navi = useNavigation();
 

  let [fontsLoaded, fontError] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

//buton
    const [pressedButton, setPressedButton] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
<ImageBackground source={require('../assets/fundo1.png')} style={styles.image}>

<View style={styles.cima}>
 
    <Image style={styles.img} source={require('../assets/Logo.png')}></Image>
      
</View>


<View style={styles.containertexto}>

<Text style={styles.titulo}>Login</Text> 


<View style={styles.opicoes}>
 
</View>

    <TextInput
    style={styles.input}
    placeholder="email"
    onChangeText={(email) => setEmail(email)}
    value={email}
    />

 
      <TextInput
    style={styles.input}
    placeholder="Senha"
    onChangeText={(senha) => setSenha(senha)}
    value={senha}
    />

 <View>
 <View style={styles.buttonContainer}>
          <View style={[styles.buttonBackground, pressedButton !== 'button5' && styles.buttonPressedBackground]}></View>
          <TouchableWithoutFeedback
           onPress={() => navi.navigate('Tela2')}
            onPressIn={() => setPressedButton('button5')}
            onPressOut={() => setPressedButton(null)}
          >
            <View style={[styles.button, pressedButton !== 'button5' && styles.buttonPressed]}>
              <Text style={styles.txt}>Continuar                        </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

    </View>
         <Text>Esqueceu sua senha</Text>
</View>

   </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
   
  },
   image: {
    flex: 1,
    resizeMode: 'cover',

  },
  img:{
    marginTop:50,
    width:200,
    height:210,
  },
  titulo: {
    margin: 10,
    fontSize: 32,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
  },
  input:{
    textAlign:'center',
    borderRadius:10,
    margin:5,
    width:300,
    height:50,
     backgroundColor:'#FFFFFF',
     borderColor:'#BBBBBB',
     borderWidth: 5,
  },
   texto: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
  },
  txt:{
marginLeft:45,
    fontSize: 16,
fontFamily:'BrunoAce-Regular',

  },
  containertexto:{
      flex: 1,
    justifyContent: 'center',
       alignItems:'center',
    width:400,
margin:5,
     marginBottom:0
  },
  cima:{
       flex: 1,
    alignItems:'center',
  justifyContent: 'center',
  },

  buttonBackground: {
    position: 'absolute',
    top: 20,
    backgroundColor: '#174738',
    borderRadius: 15,
    left:30,
      width:270,
    height:50,
  },
  button: {
    textAlign:'center',
     width:270,
     height:50,
    backgroundColor: '#236E57',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#174738',
    justifyContent: 'center',
    alignItems: 'center',
    elevation:0,
    marginLeft:30,
    marginTop:20,
    marginBottom:20,
    marginRight:30
  },
  buttonPressed: {
    borderBottomWidth: 5,
    transform: [{translateY: -5}],
  },
  opicoes:{
    textAlign:'center',
    borderRadius:10,
    margin:5,
    width:300,
    height:50,
     backgroundColor:'#FFFFFF',
     borderColor:'#BBBBBB',
     borderWidth: 5,
  }
  
});