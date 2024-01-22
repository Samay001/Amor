import React, {useEffect} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/logo.png';
import getStarted from '../../assets/images/getStarted.png';
import {useFonts} from 'expo-font';


const WelcomeScreen = ({ navigation }) => {

  const [fontsLoaded] = useFonts({
    gilmerBold: require("../../assets/fonts/gilmer-bold.otf"),
    gilmerRegular: require("../../assets/fonts/gilmer-regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const goToLoginScreen = () => {
    navigation.navigate("login");
  };

  return (
    <View style={{ backgroundColor: "#ffc7dd", flex: 1, justifyContent: "center" }}>
      <View style={{ backgroundColor: "#ffc7dd", width: 360, height: 800 }}>
        <View style={{ position: "relative", width: 298, height: 642, top: 74, left: 48 }}>
          <Image
            style={{ position: "absolute", width: 220, height: 138, top: 0, left: 39 }}
            source={getStarted} 
          />
          <View style={{ position: "absolute", width: 298, height: 470, top: 172, left: 0, backgroundColor: "#f4f4f4", borderRadius: 25 }} />
          <Image
            style={{ position: "absolute", width: 220, height: 225, top: 124, left: 39 }}
            source={logo} 
          />
          <View style={{ position: "absolute", width: 236, top: 296, left: 31 }}>
            <Text style={{ fontFamily: 'gilmerBold', fontSize: 24, color: 'black', textAlign: 'center' }}>
              Find Your Perfect Match!
            </Text>
          </View>
          <Text style={{ position: "absolute", width: 253, top: 364, left: 22, fontFamily: 'gilmerRegular', fontSize: 20, color: 'black', textAlign: 'center' }}>
            Exclusive to Chandigarh University students!
            {"\n\n"}
            Find love within our community on Amor. {"\n\n"}
            Your perfect match is just a tap away!
          </Text>
          <View style={{ position: "absolute", width: 271, height: 38, top: 581, left: 15 }}>
            <TouchableOpacity onPress={goToLoginScreen}>
              <View style={{ position: "relative", width: 269, height: 38, backgroundColor: "#ff397a", borderRadius: 25 }}>
                <Text style={{ position: "absolute", width: 116, top: 8, left: 76, fontFamily: 'gilmerBold', fontSize: 20, color: 'white', textAlign: 'center'}}>
                  Get Started
                </Text>
              </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;
