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
        marginHorizontal: 16,
        marginBottom : 20,
       
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

    button :{
        borderRadius: 8,
        maxHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        minWidth:40,
    },
    input :{
        borderRadius:8,
        maxHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        minWidth:40,
        backgroundColor: '#00000040',
        paddingHorizontal:8,
    },

}); 