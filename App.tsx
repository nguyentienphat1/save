import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreensHome from './src/Screens/Home/ScreensHome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  useFonts,
  // Roboto_100Thin,
  // Roboto_100Thin_Italic,
  // Roboto_300Light,
  // Roboto_300Light_Italic,
  Roboto_400Regular,
  // Roboto_400Regular_Italic,
  Roboto_500Medium,
  // Roboto_500Medium_Italic,
  Roboto_700Bold,
  // Roboto_700Bold_Italic,
  // Roboto_900Black,
  // Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

export default function App() {

  let [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if(!fontLoaded) {
    return <></>
  }
  else{
    return (
      <>
        <StatusBar hidden />
      <ScreensHome/>
      </>
    );
  }
}