import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRoute, useNavigation } from "@react-navigation/native"; 



const fetchCommentById = async (id) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  const comment = await response.json();
  return comment;
};

const NewsDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { article } = route.params;

  const [commentsText, setCommentsText] = useState(""); 
  const [loading, setLoading] = useState(true);

  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  
  const fetchComments = async () => {
    try {
      const commentPromises = article.kids.slice(0, 5).map((kidId) => fetchCommentById(kidId)); 
      const comments = await Promise.all(commentPromises);
      const commentTexts = comments.map(comment => comment.text).join("\n\n"); 
      setCommentsText(commentTexts);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    if (!article.text && article.kids && article.kids.length > 0) {
      fetchComments();
    } else {
      setLoading(false);  
    }
  }, [article]);

  return (
    <View style={styles.container}>
      <View style={{ padding: 12 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderRadius: 50,
            borderColor: "#156651",
            borderWidth: 1,
            height: 42,
            width: 42,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color="black"
            style={{ textAlign: "center", marginLeft: 6 }}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require("../assets/images/Break1.webp")}
        style={styles.image}
      />

      <ScrollView style={styles.textContainer}>
        <Text style={styles.title}>{article.title}</Text>

        <View style={styles.authorContainer}>
          <FontAwesome name="user" size={16} color="gray" />
          <Text style={styles.authorText}>{article.by}</Text>
          <Text style={styles.authorText}>{formatDate(article.time)}</Text>
        </View>

        <Text style={styles.content}>
          {loading ? (
            <ActivityIndicator size="large" color="#156651" />
          ) : article.text ? (
            article.text
          ) : (
            commentsText || "No content or comments available."
          )}
        </Text>

        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read More...</Text>
        </TouchableOpacity>

        <View style={{ height: 75 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  authorText: {
    color: "gray",
    marginHorizontal: 4,
  },
  content: {
    fontSize: 16,
    marginBottom: 12,
  },
  readMoreButton: {
    backgroundColor: "#156651",
    padding: 8,
    borderRadius: 4,
  },
  readMoreText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default NewsDetails;
