import { View, Text, TouchableOpacity, Button, Platform, StatusBar } from "react-native";
import React from "react";
import { Avata, Buttoncomponent, Container, Row, Section, SpaceComponent, Textconponent } from "../../components";
import { processFontFamily } from "expo-font";
import { globaStyles } from "../../styles/globaStyles";
import { fontFamily } from "../../constant/fontFamily";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constant/Colors";


const ScreensHome = () => {
  return (
    <Container>
      <Section styles = {{marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,}}>
      <Row>
          <Avata photourl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiSvRO-13Uvoz0rGgvLfVgU9gVSPu51-_M1J5N4CpfMdmg64rL"/>
            <Textconponent text="asdasda" tyle="title" size={24} styles={{textTransform : 'capitalize'}} flex={1}
            font={fontFamily.medium}/>
        </Row>       
      </Section>
      <Section>
      <Row >
        <Row  styles={[globaStyles.input, {flex:1, justifyContent: 'flex-start', paddingHorizontal:0, paddingLeft: 12}]}>
          <Textconponent text="search" flex={1}/>
          <Buttoncomponent color="#565E70" icon= {<Ionicons name='search' color={Colors.white} size={30}/>} onpress={() => {}}/>
        </Row>
        <SpaceComponent width={16}/>
        <Buttoncomponent icon ={<Ionicons name ='add' color={Colors.white} size={30} />}  onpress={() => {}}/>
      </Row>
      </Section>
    </Container>
  );
};
export default ScreensHome;
