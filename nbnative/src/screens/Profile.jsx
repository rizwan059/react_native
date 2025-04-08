import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}) => {
const {id, name} = route.params

  return (
    <View>
      <Text>Profile</Text>
      <Text>ID: {id}, Name: {name}</Text>

      <Button title='Search' onPress={()=>navigation.navigate("Search")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})