import { View, Text, StyleProp, ViewStyle, SafeAreaView } from 'react-native'
import React, { ReactNode } from 'react'
import { globaStyles } from '../styles/globaStyles';
import { Colors } from '../constant/Colors';

interface Props {
    children : ReactNode;
    styles? : StyleProp<ViewStyle>;
}


const Container = (Props : Props) => {
  const {children, styles} = Props;
  return (
    <SafeAreaView style = {{flex : 1 , backgroundColor : Colors.bgColor}}>
    <View style = {[globaStyles.Container,{} , styles]}>
      {children}
    </View>
    </SafeAreaView>
  );
};

export  {Container};