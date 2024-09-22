import {
  View,
  Text,
  ImageBackground,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { Textconponent } from "./TextComponent";
import { LinearGradient } from "expo-linear-gradient";
import { SpaceComponent } from "./SpaceComponent";
import { Fontisto } from "@expo/vector-icons";
import Row from "./Row";
import { globaStyles } from "../styles/globaStyles";
import { Colors } from "../constant/Colors";

interface props {
  item: any;
}
// lam giao dien story
const CardConvesation = (props: props) => {
  const { item } = props;

  const cocalStyles: StyleProp<ViewStyle> = {
    width: 95,
    height: 140,
    borderRadius: 30,
    justifyContent: "flex-end",
  };


  const rendercontainer =
   <>
          <Textconponent text={item.title} styles={{ fontSize: 15 }} />
          <SpaceComponent height={8} />
          <Row styles={{justifyContent: 'flex-end'}} onpress={() => {}}>
            <Fontisto name="heart" size={16} color={Colors.white} />
          </Row>
  
   </>

 
  return item.imageURL ? (
    <>
      <ImageBackground
        source={{ uri: item.imageURL }}
        style={[
          globaStyles.shadow,
          {
          ...cocalStyles,
          marginRight: 10,
          
          elevation: 16,
        }]}
        imageStyle={{
          borderRadius: 30,
          resizeMode: "cover",  
        }}
      >
       <LinearGradient
          style={{ ...cocalStyles, padding: 12 }}
          colors={["transparent", "rgba(0,0,0,0.9)"]}>
          {rendercontainer}
        </LinearGradient>
      </ImageBackground>
    </>
  ) : (
    <LinearGradient
    style={[
      globaStyles.shadow,
      {
      ...cocalStyles,
      marginRight: 10,
      elevation: 16,
    }]}
    colors={["transparent", "rgba(0,0,0,0.9)"]}>
    <View  style={{ ...cocalStyles, padding: 12 }}>
    {rendercontainer}
    </View>
    </LinearGradient>
  );
};

export { CardConvesation };
