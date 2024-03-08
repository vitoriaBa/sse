import { Text, SafeAreaView, StyleSheet,View,Image,TouchableOpacity,ImageBackground,TouchableWithoutFeedback } from 'react-native';

import React, { useState } from 'react';

import { useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native';

//esse seria o pai
export default function Tela3() {
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
<ImageBackground source={require('../assets/fundo3.png')} style={styles.image}>

<View style={styles.cima}>
 
    <Image style={styles.img} source={require('../assets/frame3.png')}></Image>
      
</View>


<View style={styles.containertexto}>

<Text style={styles.titulo}>
Acessibilidade e comunicação
      </Text> 

       <Text style={styles.texto}>
       Tenha Uma maior Acessibilidade ao conversar com diversos usuários.
      </Text>

 <View>


<View style={styles.buttonContainer}>

<View style={styles.Bolinha}></View>
<View style={styles.Bolinha}></View>
<View style={styles.Bolinha}></View>


</View>

 <View style={styles.buttonContainer}>
          
          <TouchableWithoutFeedback
           onPress={() => navi.navigate('Tela2')}
            onPressIn={() => setPressedButton('button1')}
            onPressOut={() => setPressedButton(null)}
          >
            <View style={[styles.button, pressedButton !== 'button1' && styles.buttonPressed]}>
              <Text style={styles.txt}>Voltar</Text>
            </View>
          </TouchableWithoutFeedback>

        
          <TouchableWithoutFeedback
           onPress={() => navi.navigate('Login')}
            onPressIn={() => setPressedButton('button5')}
            onPressOut={() => setPressedButton(null)}
          >
            <View style={[styles.button, pressedButton !== 'button5' && styles.buttonPressed]}>
              <Text style={styles.txt}>Continuar</Text>
            </View>
          </TouchableWithoutFeedback>
 </View>


   
         
        </View>

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
    width:400,
    height:400,
  },
  titulo: {
    margin: 24,
    fontSize: 32,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
  },
   texto: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
  },
  txt:{
marginLeft:45,
    fontSize: 10,
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
     width:150,
     height:50,
     textAlign:'center',
    backgroundColor: '#236E57',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#174738',
    justifyContent: 'center',
    alignItems: 'center',
    elevation:0,
    margin:4,
  
  },
  buttonPressed: {
    borderBottomWidth: 5,
    transform: [{translateY: -5}],
  },
  buttonContainer:{
    width:300,
    //backgroundColor:'#5D3587',
    flexDirection:'row',
    padding:0,
    margin:0,
  },
  Bolinha:{
    width:20,
    borderRadius:50,
    height:20,
    backgroundColor:'#5D3587',
  }
  
});