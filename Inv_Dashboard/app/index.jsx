import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/src/screens/Home';
import InvDashboard from '@/src/screens/InvDashboard';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="InvDashboard">

      <Stack.Screen  name="InvDashboard" component={InvDashboard}  />
      <Stack.Screen  name="Home" component={Home}  />
     
    </Stack.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})