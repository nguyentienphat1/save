import { View, Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import React, { ReactNode } from 'react'
import { globaStyles } from '../styles/globaStyles';


interface Props {
    children ?: ReactNode;
}

const Row = (Props : Props) => {
    const {children} = Props;

     
  return  (
    <View style={[globaStyles.row ]}>
      {children}
    </View>
  )
}

export default Row