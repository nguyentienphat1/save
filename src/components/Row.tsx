import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import React, { ReactNode } from 'react'
import { globaStyles } from '../styles/globaStyles';


interface Props {
    children ?: ReactNode;
    onpress? : () => void;
    styles? : StyleProp<ViewStyle>;
}

const Row = (Props : Props) => {
    const {children,onpress,styles} = Props;
    const localstyle = [globaStyles.row, globaStyles.center,{},styles]
  return onpress ? (
    <TouchableOpacity onPress={onpress} style={localstyle}>
      {children}
    </TouchableOpacity>
    ):(
      <View style={localstyle}>
      {children}
    </View>
  )
}

export default Row