import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../assets/images/logo.png';

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ backgroundColor: "#ffc7dd", flex: 1, justifyContent: "center" }}>
        <Text style={{ fontFamily: 'gilmerBold', fontSize: 24, color: 'black', textAlign: 'center' }}>
          Login Screen
        </Text>
      </View>
    </>
  );
};

export default LoginScreen;
