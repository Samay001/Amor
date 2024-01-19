import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import splashImage from '../../assets/images/logo.png';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const SplashScreenComponent = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    gilmerLight: require('../../assets/fonts/gilmer-light.otf'),
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('welcome');
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffc7dd', width: '100%' }}>
      <View style={{ width: 360, height: 800 }}>
        <View style={{ position: 'relative', width: 220, height: 225, top: 287, left: 70 }}>
          <Image source={splashImage} style={{ width: 220, height: 225 }} resizeMode="cover" />
          <Text style={{ position: 'absolute', width: 149, top: 147, left: 35, fontFamily: 'gilmerLight', fontSize: 12, color: 'black', textAlign: 'center' }}>
            Where infinite love unfolds
          </Text>
        </View>
      </View>
    </View>
  );

};

export default SplashScreenComponent;
