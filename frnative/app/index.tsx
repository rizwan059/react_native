import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ gap: 10 }}
        horizontal
      >

        <View style={styles.viewContainer1}>

          <Image style={{ width:50, height: 50, borderRadius: 50 }}
            source={{ uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" }}
          />
          <View>Name</View>
          <View>Email</View>

        </View>




      </ScrollView>

    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  mainContainer: {
alignItems: "center",
justifyContent: "center"

  },

  viewContainer1: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
  borderRadius: 10

  },
  

})