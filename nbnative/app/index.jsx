import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/screens/Home'


const Stack = createNativeStackNavigator();



const Index = () => {
  return (

    <View>
      <Link href="/home">Home</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})