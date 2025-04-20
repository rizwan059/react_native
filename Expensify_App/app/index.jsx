
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: "hidden" }} name="Home" component={Home} />
    </Stack.Navigator>
  )
}



export default index

const styles = StyleSheet.create({})