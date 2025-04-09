import { StyleSheet, Text, View, FlatList } from 'react-native'


const AllItems = ({ data }) => {
  return (
    <View>

      <View style={styles.allItemsContainer}>
        <Text style={styles.allItemsText}>Items</Text>
        <Text style={styles.allItemsText}>Qty</Text>
      </View>

      <FlatList

        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.singleItem}>
            <Text>{item.name}</Text>
            <Text>{item.qty}</Text>
            <Text>{item.id}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({

  allItemsContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20

  },
  allItemsText: {
    // borderRadius: 50,
    // borderWidth: 1,
    
    borderColor: "green",
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize:20
    

  },
  singleItem:{
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  }
})