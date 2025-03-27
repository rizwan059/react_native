import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ gap: 10 }}
        horizontal
      >



        <View style={styles.viewContainer1}></View>
        



      </ScrollView>

    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  mainContainer: {


  },

  viewContainer1: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
    borderRadius: 50

  },
  viewContainer2: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderRadius: 50

  },
  viewContainer3: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",

    borderRadius: 50

  }

})