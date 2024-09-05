import { StyleSheet } from "react-native";
import { Container}  from "../components";
import { Colors } from "../constant/Colors";
import { fontFamily } from "../constant/fontFamily";
import Avata from "../components/Avata";

export const globaStyles = StyleSheet.create({
    Container: {
        flex : 1,
        backgroundColor : Colors.bgColor,
    },
    text :{
        color : Colors.white,
        fontSize :14, 
        fontFamily : fontFamily.regular,
        
        
    },

    section : {
        marginHorizontal: 30,
        marginBottom : 20,
        paddingVertical :16,
    },

    row :{
        flexDirection : 'row',
        
    },

    center : {
        justifyContent :'center',
        alignContent : 'center',
    },

    avata : {
        width : 50,
        height : 50,
        borderRadius : 50,
    },

}); 