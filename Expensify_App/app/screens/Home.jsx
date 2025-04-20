import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import React from 'react'
import Search from './Search'

const Home = ({navigation}) => {
  return (
    <View>
      <Button title="Search" onPress={() => navigation.navigate("Search")}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})