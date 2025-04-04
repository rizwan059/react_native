import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/screens/Home'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <StackContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </StackContainer>
  );
};



const index = () => {
  return (

    <View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({})