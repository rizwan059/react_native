import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'


const CreateScreen = () => {

  const [itemName, setitemName] = useState('')
  const [itemStock, setitemStock] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name...'
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setitemName(item)}
      />

      <TextInput
        placeholder='Enter stock amount...'
        placeholderTextColor="#999"
        style={styles.input}
        value={itemStock}
        onChangeText={(item) => setitemStock(item)}
      />

      <Pressable style={styles.addButton}>
        <Text style={styles.itemAddButtonText}>ADD ITEM IN STOCK</Text>
      </Pressable>

    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    padding: "4%",
    gap: 10
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D7F6CFFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7
  },
  
  addButton: {
   backgroundColor:"green",
   paddingVertical:15,
   paddingHorizontal:10,
   justifyContent:"center",
   alignItems:"center",
   borderRadius:8
  },

  itemAddButtonText:{
color:"white",
fontWeight:"bold",
fontSize:16
  }
})