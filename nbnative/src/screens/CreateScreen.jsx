import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'


const CreateScreen = ({ data }) => {

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



      <View>

        <FlatList

          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={[styles.singleItem, { backgroundColor: item.stock < 7 ? "#FFCCCC" : "#D7F6BF" }]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>
            </View>

          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

      <View>
        <Text>Edit</Text>
        <Text>Delete</Text>
      </View>

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
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },

  itemAddButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },

  allItemsContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10

  },
  allItemsText: {
    // borderRadius: 50,
    // borderWidth: 1,

    borderColor: "green",
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 20,



  },

  singleItem: {
    flexDirection: "row",

    paddingHorizontal: 35,
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 3,
    borderRadius: 10,


  },
  itemText: {

    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 3,

  }
})