import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image and Name */}
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/images/suit.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Tunde Akinola Philps</Text>
        <Text style={styles.location}>LAGOS, NG • </Text>
      </View>

      <View style={styles.divider} />

      {/* Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Hometown • Gender • Age </Text>
          {"\n"}
          Lagos, NG • Male • 35 Years Old
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Job Title • Company </Text>
          {"\n"}
          Software Engineering at Turing
        </Text>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.label}>About Me</Text>
        <Text style={styles.aboutText}>
          Hello, my name is tunde and i am interested in the position of a
          Software Engineer with your company, i have 4years of experience in
          building Web and Mobile applications, my tech stacks are HTML, CSS,
          Javascript, React, Next.js and React Native. You should chose me
          because of my proven ability to build unique frontend Users interfaces
          with mordern best practises,
        </Text>
      </View>

      {/* Footer Icons */}
      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="facebook" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, styles.checkButton]}>
          <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome6 name="x-twitter" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "#156651",
  },
  divider: {
    height: 1,
    backgroundColor: "#156651",
    marginVertical: 10,
  },
  detailsSection: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  label: {
    fontWeight: "600",
    color: "#156651",
    marginBottom: 4,
  },
  aboutSection: {
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "auto",
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  checkButton: {
    backgroundColor: "#4caf50",
  },
});

export default ProfileScreen;
