import products from "../../product.json";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");
  const data = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Luxury Watch</Text>

        <TouchableOpacity style={styles.profile}>
          <Ionicons name="person" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" />

          <TextInput
            style={styles.input}
            placeholder="Search watch..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.detail}>
              <Text style={styles.stock}>Stock : {item.stock}</Text>

              <Text style={styles.category}>
                Category : {item.category}
              </Text>

              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.price}>฿ {item.price}</Text>
            </View>

            <View style={styles.right}>
              <View style={styles.active}>
                <Text style={styles.activeText}>Active</Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={18}
                color="#A855F7"
              />
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="home-outline"
            size={22}
            color="#888"
          />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="add-outline"
            size={22}
            color="#888"
          />
          <Text style={styles.tabText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <MaterialCommunityIcons
            name="watch"
            size={22}
            color="#A855F7"
          />
          <Text style={styles.tabActive}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#888"
          />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A855F7",
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  profile: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#C084FC",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBar: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    elevation: 2,
  },

  input: {
    flex: 1,
    padding: 10,
    fontSize: 15,
  },

  addBtn: {
    marginLeft: 10,
    backgroundColor: "#A855F7",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },

  addText: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 12,
    borderRadius: 15,
    elevation: 3,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },

  detail: {
    flex: 1,
    marginLeft: 12,
  },

  stock: {
    color: "#22C55E",
    fontSize: 13,
    marginBottom: 2,
  },

  category: {
    color: "#666",
    fontSize: 13,
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 4,
  },

  price: {
    color: "#A855F7",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 3,
  },

  right: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  },

  active: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  activeText: {
    color: "#16A34A",
    fontWeight: "bold",
    fontSize: 12,
  },

  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
  },

  tab: {
    alignItems: "center",
  },

  tabText: {
    fontSize: 12,
    color: "#888",
    marginTop: 3,
  },

  tabActive: {
    fontSize: 12,
    color: "#A855F7",
    fontWeight: "bold",
    marginTop: 3,
  },
});