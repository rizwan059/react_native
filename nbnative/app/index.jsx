import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/screens/Home'
import Profile from '../src/screens/Profile'
import Search from '../src/screens/Search'


const Stack = createNativeStackNavigator();


const Index = () => {
  return (


    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />

    </Stack.Navigator>

  )
}

export default Index

const styles = StyleSheet.create({})