import { Text, SafeAreaView, StyleSheet,View,Image, ImageBackground,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useReducer} from 'react';  //navi.navigate('Tela2Screen');
import AppIntroSlider from 'react-native-app-intro-slider';
import { useFonts} from 'expo-font';
import LoginScreen from './Login';

const slides =[
  {
    id:1,
    image: require('../assets/frame1.png'),
    titulo:'PROTEÇÃO E SEGURANÇA',
    texto:'Para uma maior segurança no estabelecimento educacional.',
    ImageBackground:require('../assets/fundo2.png'),
  },
  {
    id:2,
    image: require('../assets/frame2.png'),
    titulo:' SEGURANÇA',
    texto:'Para uma maior segurança no estabelecimento educacional.',
    ImageBackground:require('../assets/fundo1.png'),
  },
  {
    id:3,
    image: require('../assets/frame3.png'),
    titulo:'PROTEÇÃO',
    texto:'Para uma maior segurança no estabelecimento educacional.',
    ImageBackground:require('../assets/fundo1.png'),
  },
]


export default function TelaInicial() {
   //fonte
   let [fontsLoaded, fontError] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  const navi = useNavigation();

  const [showLogin, setShowLogin] = useReducer(false);
 

function Slides({item}){
  return(
    <ImageBackground source={item.ImageBackground} style={styles.image}>
    
    <Image source={item.image} style={styles.img} /> 
            <View style={styles.containertexto}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.texto}>{item.texto}</Text>
            </View>
          
    </ImageBackground>
  )
}


 if(showLogin){
  return navi.navigate(LoginScreen);
 }
else{
 


  return (
    <AppIntroSlider
    renderItem={Slides}
    data={slides}
    activeDotStyle={{
      backgroundColor:'#236E57',
      width:60,
      height:20,
      borderRadius:30,
      marginBottom:150,
      
    }}
    renderDoneButton={()=> <Text style={{
      fontSize: 17,
      fontFamily:'BrunoAce-Regular',
      width:380,
      height:40,
      padding:10,
      textAlign:'center',
      borderRadius: 12, 
      borderWidth: 2,
      borderColor: '#174738', 
      backgroundColor: '#236E57', 
      color: '#000000',
      transform: [{ translateY: -5 }], 
}}>Logar</Text>}
    renderNextButton={() => <Text style={{
      fontSize: 17,
    fontFamily:'BrunoAce-Regular',
    width:380,
    height:40,
    padding:10,
    textAlign:'center',
    borderRadius: 12, 
    borderWidth: 2,
    borderColor: '#174738', 
    backgroundColor: '#236E57', 
    color: '#000000',
    transform: [{ translateY: -5 }], 

    }}>Próximo</Text>}
    
    onDone={() => {return navi.navigate(LoginScreen)}}

    dotStyle={{
      backgroundColor: '#5D3587',
      width: 20,
      height: 20,
      borderRadius: 10,
      marginHorizontal: 18, 
      marginBottom:150,
    }}
    />
  
  );
}
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
    marginTop:10,
    width:400,
    height:400,
  },
  titulo: {
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
    fontSize: 16,
fontFamily:'BrunoAce-Regular',

  },
  containertexto:{
      flex: 1,
    justifyContent: 'center',
       alignItems:'center',
    width:400,
     marginBottom:0
  },
  cima:{
       flex: 1,
    alignItems:'center',
    marginTop:20,
  justifyContent: 'center',
  },

  buttonTop: {
    fontSize: 17,
    fontFamily:'BrunoAce-Regular',
    width:250,
    height:50,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12, 
    borderWidth: 2,
    borderColor: '#174738', 
    backgroundColor: '#236E57', 
    color: '#000000',
    transform: [{ translateY: -5 }], 
  },
  buttonHover: {
    borderRadius: 12, 
    transform: [{ translateY: -9 }],
  },
 containerbutton:{
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  marginTop:20,
  width:350,
    height:70,
   // backgroundColor: '#e8e8e8', 
 },
 bolinhasContainer:{
  flexDirection:'row',
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  justifyContent:'space-evenly',
backgroundColor: '#e8e8e8',
  marginTop:20,
  width:350,
    height:40,
},
 Bolinha:{
  width:20,
  borderRadius:50,
  height:20,
  backgroundColor:'#5D3587',
},
Banimation1:{
  width:70,
  borderRadius:50,
  height:20,
  backgroundColor:'#174738',
}
 
  
});