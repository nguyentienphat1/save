import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import React, { ReactNode } from 'react'
import { globaStyles } from '../styles/globaStyles';


interface Props {
    children : ReactNode;
    onPress? : () => void;
    styles?: StyleProp<ViewStyle>
}

const Row = (Props : Props) => {
    const {children, onPress,styles} = Props;

    const localStyles = [globaStyles.row, globaStyles.center , {} , styles] 
  return  (
    

    <View style = {localStyles}>{children} </View>
  )
}

export default Row