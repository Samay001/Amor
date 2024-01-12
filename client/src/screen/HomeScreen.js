import React from 'react'
import { View, Text, Button} from 'react-native'

const HomeScreen = ({navigation}) =>{
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to dating Screen" onPress={() => navigation.navigate("dating")}/>
      <Button title='Go to chat Screen'onPress={() => navigation.navigate("chat")}/>
      <Button title='Go to secretCrush Screen' onPress={() => navigation.navigate("secretCrush")}/>
      <Button title='Go to profile Screen' onPress={() => navigation.navigate("profile")}/>
    </View>
  )
}

export default HomeScreen