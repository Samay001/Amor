import React from 'react'
// import {View , Text} from 'react-native'
import WelcomeScreen from '../screen/WelcomeScreen'
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'
import HomeScreen from '../screen/HomeScreen.js'
import DatingScreen from '../screen/DatingScreen'
import ChatScreen from '../screen/ChatScreen'
import SecretCrushScreen from '../screen/SecretCrushScreen'
import ProfileScreen from '../screen/ProfileScreen'
import FeedbackScreen from '../screen/FeedbackScreen.js'
import SettingScreen from '../screen/SettingScreen.js'
import PersonalDetailsScreen from '../screen/PersonalDetailsScreen.js'
import SplashScreenComponent from '../screen/SplashScreenComponent.js'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const appNavigation = () => {

  const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="dating" component={DatingScreen} />
        <Tab.Screen name="chat" component={ChatScreen} />
        <Tab.Screen name="secretCrush" component={SecretCrushScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  const ProfileTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="personalDetails" component={PersonalDetailsScreen} />
        <Tab.Screen name="feedback" component={FeedbackScreen} />
        <Tab.Screen name="setting" component={SettingScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer> 
      <Stack.Navigator 
        initialRouteName="splash"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="splash" component={SplashScreenComponent} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="dating" component={DatingScreen} />
        <Stack.Screen name="chat" component={ChatScreen} />
        <Stack.Screen name="secretCrush" component={SecretCrushScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default appNavigation