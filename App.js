import React,{useState} from 'react'
import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'
import { TouchableOpacity,Text,Image,View,StyleSheet, Pressable } from 'react-native'


const App = () =>{

  const [uri,setUri] = useState(DiceFive)
  const [uri1,setUri1] = useState(DiceOne)


  const playButtonTap = () =>{

    let randomNumber = Math.floor(Math.random() * 6) +1

    switch(randomNumber){
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;
        default:
        setUri(DiceOne)
        break;
      }
  }


  const playButtonTap2 = () =>{

    let randomNumber2 = Math.floor(Math.random() * 6) +1

    switch(randomNumber2){
      case 1:
        setUri1(DiceOne)
        break;
      case 2:
        setUri1(DiceTwo)
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour)
        break;
      case 5:
        setUri1(DiceFive)
        break;
      case 6:
        setUri1(DiceSix)
        break;
        default:
        setUri1(DiceOne)
        break;
      }
  }

  return (
    <>
    <View style={styles.Container} >
      <TouchableOpacity onPress={playButtonTap}>
      <Image source={uri} style={styles.image}/>
        {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
      </TouchableOpacity>
      <Pressable onPress={playButtonTap2}>
      <Image source={uri1} style={styles.image}/>
        {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
      </Pressable>
    </View>
    </>
  )

}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#222831',
    alignItems:'center',
    justifyContent:'space-around'
  },
  image:{
    height:150,
    width:150
  },
  gamePlayButton:{
   fontSize:20,
   marginTop:30,
   color:'#F2A365',
   paddingHorizontal:40,
   paddingVertical:10,
   borderColor:'#30475E',
   borderWidth:3,
   borderRadius:10
  }
})

export default App