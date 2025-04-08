import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../src/screens/Home'
import Profile from '../src/screens/Profile'
import Search from '../src/screens/Search'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}


const Index = () => {
  return (


    <MyTabs />

  )
}

export default Index

const styles = StyleSheet.create({})