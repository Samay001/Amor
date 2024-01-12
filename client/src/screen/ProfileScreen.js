import React from 'react'
import { View, Text, Button } from 'react-native'

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text> ProfileScreen </Text>
      <Button onPress={() => navigation.navigate("personalDetails")} title="Go personal details" />
      <Button onPress={() => navigation.navigate("feedback")} title="Go to Feedback and Support" />
      <Button onPress={() => navigation.navigate("setting")} title="Go to Settings" />
    </View>
  )
}

export default ProfileScreen