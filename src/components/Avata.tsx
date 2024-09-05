import { View, Text, StyleProp, ViewStyle, Image,  } from 'react-native'
import React from 'react'
import { globaStyles } from '../styles/globaStyles';
import { Textconponent } from './TextComponent';


interface Props {
    photourl? : string;
    size? : number;
    bordered? : string;
    border? : {
        width? : number;
        color? : string;
    }
    styles? : StyleProp<ViewStyle>;
}

const Avata = (Props : Props) => {

    const {photourl,size,bordered,border,styles} = Props;
    const locaStyles : any = [
        globaStyles.avata, {}, styles
    ]
  return (
    <View>
      {
      photourl ? (
        <Image style={locaStyles} source={{uri :  photourl}} />
      ):( <View style = {locaStyles}>
        <Textconponent text= 'a'/>
       </View>
       )
     }
    </View>
  )
}

export default Avata