import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globaStyles } from '../styles/globaStyles';
import { Textconponent } from './TextComponent';
import { Colors } from '../constant/Colors';

interface props {
    style? : StyleProp<ViewStyle>;
    text? :string;
    icon? : ReactNode;
    onpress : ()=> void;
    color?: string;
}

const Buttoncomponent = (props : props) => {

    const {style,text,icon,onpress,color}= props;

  return (
    <TouchableOpacity style ={[globaStyles.button,{
      backgroundColor : color ?? Colors.blue
    },style]}>
      {icon && icon}
      {text && <Textconponent text={text}  color={color ? Colors.white : '#212121'}/>}
    </TouchableOpacity>
  )
}

export  {Buttoncomponent}