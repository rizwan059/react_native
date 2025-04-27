import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import Home from './Home'

const InvDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeMainContainer}>

      <View style={styles.homeFirstView}>

        <Text style={styles.homeMainHeadingText}>Inventory Dashboard</Text>

        <Pressable style={styles.buttonLogout}>
          <Text style={styles.textLogout} 
          onPress={() => navigation.navigate("Home")} >
            Logout
            </Text>
        </Pressable>
      </View>

      {/* <View style={styles.homeImageView}>
        <Image style={styles.mainImg} source={require('../images/inv.png')} />
      </View> */}

    </SafeAreaView>
  )
}

export default InvDashboard

const styles = StyleSheet.create({

  homeMainContainer: {
    flex: 1
  },
  homeFirstView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  homeMainHeadingText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonLogout: {
    backgroundColor: "white",
    borderRadius: 500,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 15

  },
  textLogout: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  },
  homeImageView: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#D4C9BE",
    marginHorizontal: 30,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 30
  },
  mainImg: {
    height: 220,
    width: 220,

  },

  recentTripsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  recentTripsText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonRecentTrips: {
    backgroundColor: "white",
    borderRadius: 500,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 15

  },
  textAddTrips: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  },
})