import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { Children, ReactNode } from 'react'
import { globaStyles } from '../styles/globaStyles';

interface Props{
    children : ReactNode;
    styles? : StyleProp<ViewStyle>;
}

const Section = (Props : Props) => {

    const  {children,styles} =Props;

  return (
    <View style = {[globaStyles.section,{}, styles]}>
      {children}
    </View>
  );
};

export  {Section}