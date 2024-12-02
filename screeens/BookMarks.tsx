import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AddBookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Book.webp")}
        style={styles.image}
      />
      <Text style={styles.title}>Add Bookmarks</Text>
      <Text style={styles.description}>
        Don't forget to bookmark the posts you like the most so that you can
        find them easily over here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default AddBookmarksScreen;
