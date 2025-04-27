import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../../app'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'





const index = () => {

  const [view, setview] = useState(0)
  const [data, setdata] = useState([
    { id: 1, name: 'wheat', stock: 5, unit: 'kg' },
    { id: 2, name: 'sugar', stock: 6, unit: 'kg' },
    { id: 3, name: 'bread', stock: 7, unit: 'ea' },
    { id: 4, name: 'egg', stock: 8, unit: 'ea' },
    { id: 5, name: 'soap', stock: 9, unit: 'pack' }
  ])

  return (

    <SafeAreaView>

      

      <View style={styles.container}>

        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.buttonContainer}>

          <Pressable style={[styles.button, view === 0 ? { backgroundColor: 'green' } : null]} onPress={() => setview(0)}>
            <Text style={[styles.buttonText, view === 0 ? { color: 'white' } : null]}>All Items</Text>
          </Pressable>
          <Pressable style={[styles.button, view === 1 ? { backgroundColor: 'green' } : null]} onPress={() => setview(1)}>
            <Text style={[styles.buttonText, view === 1 ? { color: 'white' } : null]}>Low Stock</Text>
          </Pressable>
          <Pressable style={[styles.button, view === 2 ? { backgroundColor: 'green' } : null]} onPress={() => setview(2)}>
            <Text style={[styles.buttonText, view === 2 ? { color: 'white' } : null]}>Create Item</Text>
          </Pressable>


        </View>


        {view === 0 && <AllItems data={data} />}
        {view === 1 && <AllItems data={data.filter((item) => item.stock < 7)} />}
        {view === 2 && <CreateScreen data={data} setdata={setdata} />}

      </View>

    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: "100%",
    padding: "4%",
    backgroundColor: "#ffffff"

  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 5
  },

  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "green"
  },
  buttonText: {
    color: "green",
    fontWeight: 'bold'
  }
})