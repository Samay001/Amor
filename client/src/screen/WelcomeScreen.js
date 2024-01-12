import React from 'react'
import { View, Text, Button} from 'react-native'

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to Amor!</Text>
      <Button title="Go to login Screen" onPress={() => navigation.navigate("login")}/>
    </View>
  )
}

export default WelcomeScreen