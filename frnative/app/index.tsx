import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const dummy = [
  { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com", "image": "https://example.com/alice.jpg" },
  { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com", "image": "https://example.com/bob.jpg" },
  { "id": 3, "name": "Charlie Davis", "email": "charlie.davis@example.com", "image": "https://example.com/charlie.jpg" },
  { "id": 4, "name": "David Brown", "email": "david.brown@example.com", "image": "https://example.com/david.jpg" },
  { "id": 5, "name": "Emma Wilson", "email": "emma.wilson@example.com", "image": "https://example.com/emma.jpg" },
  { "id": 6, "name": "Franklin Harris", "email": "franklin.harris@example.com", "image": "https://example.com/franklin.jpg" },
  { "id": 7, "name": "Grace Lewis", "email": "grace.lewis@example.com", "image": "https://example.com/grace.jpg" },
  { "id": 8, "name": "Henry Walker", "email": "henry.walker@example.com", "image": "https://example.com/henry.jpg" },
  { "id": 9, "name": "Isabella King", "email": "isabella.king@example.com", "image": "https://example.com/isabella.jpg" },
  { "id": 10, "name": "Jack Martinez", "email": "jack.martinez@example.com", "image": "https://example.com/jack.jpg" }
]


const index = () => {
  return (
    <SafeAreaView>

      <View style={styles.mainContainer}>

        <FlatList

          data={dummy}
          renderItem={({ item }) => (

        <View style={styles.viewContainer1}>
          <Image style={{ width: 50, height: 50, borderRadius: 50 }}
            source={{ uri: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" }}
          />
          <Text>Name</Text>
          <Text>Email</Text>
        </View>
        )}

         keyExtractor={item =>item.id}
         numColumns={2}
         columnWrapperStyle={{gap:10}}
         ItemSeparatorComponent={<View style={{height:10}}/>}
        />

      </View>

    </SafeAreaView>
  )
}

// styling starts here
export default index

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5
  },

  viewContainer1: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },


})