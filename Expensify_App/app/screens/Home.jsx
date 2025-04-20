import { StyleSheet, Text, View, Pressable } from 'react-native'


import React from 'react'

const Navigation = () => {
  return (
    <View style={styles.mainContainer}>
          <Text style={styles.mainHeadingText}>Expensify</Text>
        <Pressable>
          <Text>Logout</Text>
        </Pressable>
    </View>
  )
}



export default Navigation

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  mainHeadingText:{
    fontSize: 30
  }
})