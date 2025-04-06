import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>

      <Button title='Search' onPress={()=>navigation.navigate("Search")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})