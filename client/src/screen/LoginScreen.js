import React from 'react'
import { View, Text, Button} from 'react-native'

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text> LoginScreen </Text>
      <Button title="Go to register Screen" onPress={() => navigation.navigate("register")}/>
    </View>
  )
}

export default LoginScreen