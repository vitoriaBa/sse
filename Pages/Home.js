import {Text,View, SafeAreaView, StyleSheet,Image } from 'react-native';
 

 export default function Home(){
   return(
    <SafeAreaView style={styles.container}>
 
    <View style={styles.texto}>
    <Text style={styles.txt}>Home</Text>
    </View>
    </SafeAreaView>
   );
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#80B3FF',
    padding: 0,
    paddingTop:140,
  },


} );