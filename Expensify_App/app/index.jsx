
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Search from './screens/Search';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen  name="Search" component={Search} options={{headerShown: "false"}} />
    </Stack.Navigator>
  )
}



export default index

const styles = StyleSheet.create({})