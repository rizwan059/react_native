import { StyleSheet, Text, View, Pressable, Button, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Search from './Search'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainHeadingText}>Expensify</Text>
        <Pressable>
          <Text onPress={() => navigation.navigate("Search")}>Logout</Text>
        </Pressable>

      </View>

      <View>
        <Image style={styles.mainImg} source={require('../src/images/inventory.png')} />
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainHeadingText: {
    fontSize: 30
  },
  mainImg:{
    flex: 1,
    justifyContent: 'center',
    width:360,
    height:500,
    resizeMode: 'stretch',
    
  }
})