import { StyleSheet, Text, View, FlatList } from 'react-native'


const AllItems = ({ data }) => {
  return (
    <View>

      <View style={styles.allItemsContainer}>

        <Text style={styles.allItemsText}>ID</Text>
        <Text style={styles.allItemsText}>Items</Text>
        <Text style={styles.allItemsText}>Qty</Text>
        
      </View>

      <FlatList

        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={[styles.singleItem, {backgroundColor: item.stock < 7 ? "#FFCCCC" : "#D7F6BF"}]}>

            <Text style={styles.itemText}>{item.id}</Text>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
            

          </View>
        )}
        contentContainerStyle={{gap:10}}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({

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
    borderRadius:10,
    

  },
  itemText: {

    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 3,

  }
})