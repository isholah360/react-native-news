import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import BreakingNewsCard from "../components/Breaking";
import TabComponent from "../components/Tabs";

const Homepage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Search Bar */}
      <StatusBar backgroundColor="#f5f5f5" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#7D7D7D"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search Articles"
            placeholderTextColor="#7D7D7D"
          />
          <TouchableOpacity>
            <Feather
              name="camera"
              size={20}
              color="#7D7D7D"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Right Notification Icon */}
        <TouchableOpacity>
          <MaterialIcons name="notifications-none" size={24} color="#7D7D7D" />
        </TouchableOpacity>
      </View>
      {/* Location Information */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 12,
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="map-pin" size={16} color="#7D7D7D" />
          <Text style={styles.locationText}>
            Lagos,
            <Text style={styles.locationAddress}> Nigeria.</Text>
          </Text>
        </View>

        <Feather
          name="chevron-down"
          style={{ display: "flex", justifyContent: "flex-end" }}
          size={16}
          color="#7D7D7D"
        />
      </View>

      {/* Hero Section */}
      <BreakingNewsCard />

      <TabComponent />
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "#F5F5F5",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 44,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  locationText: {
    fontSize: 14,
    color: "#404040",
    marginHorizontal: 5,
  },
  locationAddress: {
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    height: 246,
    width: 152,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 16,
    marginRight: 16, // Space between cards
  },
  image: {
    height: 121,
    width: 120,
    alignSelf: "center",
  },
  details: {
    paddingHorizontal: 16,
    gap: 2,
    bottom: 14,
  },
  discountBadge: {
    backgroundColor: "#E44A4A",
    height: 20,
    width: 51,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  discountText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 10,
  },
  productName: {
    fontWeight: "400",
    color: "#404040",
    paddingVertical: 6,
  },
  price: {
    fontWeight: "700",
    color: "#404040",
    fontSize: 20,
  },
  originalPrice: {
    fontWeight: "400",
    color: "#404040",
    fontSize: 12,
    textDecorationLine: "line-through", // Shows the original price as crossed out
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "400",
  },
});
