import React from 'react'
import { View, Text, Button } from 'react-native'

const RegisterScreen = ({navigation}) =>{
  return (
    <View>
      <Text> RegisterScreen </Text>
      <Button onPress={() => navigation.navigate("home")} title="Go to home Screen" />
    </View>
  )
}

export default RegisterScreen