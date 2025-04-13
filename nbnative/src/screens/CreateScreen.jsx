import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'


const CreateScreen = ({ data, setdata }) => {

  const [itemName, setitemName] = useState('')
  const [itemStock, setitemStock] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  // button's handlers starts here. button's handlers starts here. 

  // add items handler button starts here
  const handlerAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: itemStock
    }
    setdata([...data, newItem])
    setitemName('')
    setitemStock('')
    setisEdit(false)
  }
  // delete items handler button starts here
  const handlerDeleteItem = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }
 // edit items handler button starts here
  const handlerEditItem = (item)=>{
    setisEdit(true)
setitemName(item.name);
seteditItemId(item.id);

  }

// update items handler button starts here
  const handlerUpdateItem = ()=>{
setdata(data.map((item) => (
  item.id === editItemId ? {...item, name: item.name, stock: itemStock} : item
)))
  }

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

      <Pressable style={styles.addButton} onPress={() => isEdit ? handlerUpdateItem() : handlerAddItem()}>
        <Text style={styles.itemAddButtonText}>{isEdit ? 'CLICK TO UPDATE' : 'ADD ITEM IN STOCK'}</Text>
      </Pressable>



      <View>

        <FlatList

          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={[styles.singleItem, { backgroundColor: item.stock < 7 ? "#FFCCCC" : "#D7F6BF" }]}>
              <Text style={styles.itemText}>{item.name}</Text>

              <View style={{ flexDirection: 'row', gap: 30 }}>
                <Text style={styles.itemText}>{item.stock}</Text>

                {/* item edit button starts here */}
                <Pressable onPress={() => handlerEditItem(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>

                {/* item delete button starts here */}
                <Pressable onPress={() => handlerDeleteItem(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>

            </View>

          )}
          contentContainerStyle={{ gap: 10 }}
        />
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
    justifyContent: 'space-between',
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