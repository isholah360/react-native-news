import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

const { width } = Dimensions.get("window");

const breakingNewsData = [
  {
    id: "1",
    title: "Guterres Strongly Condemns Deadly Mosque Attack Pakistan",
    source: "CNN News",
    date: "Today",
    joined: 234,
    imageSource: require("../assets/images/Break1.webp"),
  },
  {
    id: "2",
    title: "Supreme Court Hears Arguments on Student Loan Forgiveness",
    source: "BBC News",
    date: "Yesterday",
    joined: 412,
    imageSource: require("../assets/images/Break1.webp"),
  },
  {
    id: "3",
    title: "Earthquake Hits California, Causing Widespread Damage",
    source: "NBC News",
    date: "2 days ago",
    joined: 789,
    imageSource: require("../assets/images/Break1.webp"),
  },
  {
    id: "4",
    title: "World Leaders Gather for G20 Summit in Rome",
    source: "Reuters",
    date: "3 days ago",
    joined: 325,
    imageSource: require("../assets/images/Break1.webp"),
  },
];

const BreakingNewsCard = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Breaking News</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={breakingNewsData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("NewsDetails")}
          >
            <Image source={item.imageSource} style={styles.cardImage} />
            <View style={styles.overlay} />
            <View style={styles.liveBadge}>
              <Ionicons name="radio" size={12} color="#fff" />
              <Text style={styles.liveText}>Live</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <View style={styles.footer}>
                <Text style={styles.source}>
                  {item.source} • {item.date}
                </Text>
                <Text style={styles.joined}>{item.joined} Joined</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#156651",
    textDecorationLine: "underline",
    fontWeight: "700",
  },
  flatListContainer: {
    paddingRight: 0,
  },
  card: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    width: width - 50,
    height: 200,
    marginRight: 10,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  liveBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FF3D3D",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  liveText: {
    fontSize: 12,
    color: "#fff",
    marginLeft: 4,
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  source: {
    fontSize: 12,
    color: "#ccc",
  },
  joined: {
    fontSize: 12,
    color: "#ccc",
  },
});

export default BreakingNewsCard;
