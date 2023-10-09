import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground} from 'react-native';
import sonic from './assets/sonic.gif';
import estrada from './assets/estrada.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source= {estrada}resizeMode='cover' style ={{width:'100%', height:'100%'}}>
      <Image source={sonic} style ={styles.img}/>
      </ImageBackground>
      
      {/* <Text style={styles.texto}>Sonic</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',     
    alignItems: 'center',
    justifyContent: 'center'
  },
img: {width:180,
  height:150,
  marginTop:300,
  marginLeft:270,
},

    texto:{
      fontSize: 55,
      fontStyle:'italic',
      fontWeight:'bold',
      color:'#0000FF',
      
    },
});
