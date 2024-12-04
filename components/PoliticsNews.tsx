// import React from "react";
// import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

// const PoliticsNews = () => {
//   return (
//     <View>
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: 4,
//         }}
//       >
//         <Text
//           style={{
//             fontWeight: "700",
//             fontSize: 24,
//             color: "#404040",
//             lineHeight: 28.8,
//           }}
//         >
//           Recommended
//         </Text>
//         <Text
//           style={{
//             color: "#156651",
//             fontWeight: "700",
//             textDecorationLine: "underline",
//           }}
//         >
//           See More
//         </Text>
//       </View>
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.articleContainer}>
//             <Image
//               source={require("../assets/images/Politics1.webp")}
//               style={styles.articleImage}
//             />
//             <View style={styles.articleInfo}>
//               <Text style={styles.title}>
//                 New Study Finds Link Between Exercise and Productivity
//               </Text>
//               <Text style={styles.source}>Health • May 24, 2023</Text>
//             </View>
//           </View>

//           <View style={styles.articleContainer}>
//             <Image
//               source={require("../assets/images/Politics2.jpeg")}
//               style={styles.articleImage}
//             />
//             <View style={styles.articleInfo}>
//               <Text style={styles.title}>
//                 Tech Giant Announces New Line of Smart Home Devices
//               </Text>
//               <Text style={styles.source}>Technology • May 25, 2023</Text>
//             </View>
//           </View>

//           <View style={styles.articleContainer}>
//             <Image
//               source={require("../assets/images/Politics3.jpeg")}
//               style={styles.articleImage}
//             />
//             <View style={styles.articleInfo}>
//               <Text style={styles.title}>
//                 City Council Approves Plan to Expand Public Transportation
//               </Text>
//               <Text style={styles.source}>Politics • May 26, 2023</Text>
//             </View>
//           </View>

//           <View style={styles.articleContainer}>
//             <Image
//               source={require("../assets/images/Politics4.jpg")}
//               style={styles.articleImage}
//             />
//             <View style={styles.articleInfo}>
//               <Text style={styles.title}>
//                 Researchers Discover Potential Treatment for Alzheimer's
//               </Text>
//               <Text style={styles.source}>Health • May 27, 2023</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   articleContainer: {
//     flexDirection: "row",
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: "#f0f0f0",
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   articleImage: {
//     width: 120,
//     height: 120,
//   },
//   articleInfo: {
//     flex: 1,
//     padding: 12,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   source: {
//     fontSize: 14,
//     color: "#666",
//   },
// });

// export default PoliticsNews;

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  text: string;
  url: any;
}

const PoliticsNews: React.FC<{ article: Article }> = ({ article }) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [articleIds, setArticleIds] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);  

  const pageSize = 25; 

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((response) => response.json())
      .then((data) => {
        setArticleIds(data);  // Set all article IDs
      })
      .catch((error) => console.error("Error fetching article IDs:", error));
  }, []);

  useEffect(() => {
    if (articleIds.length > 0) {
      const fetchArticles = async () => {
        const start = (page - 1) * pageSize;
        const end = page * pageSize;
        const fetchedIds = articleIds.slice(start, end);

        const fetchedArticles = await Promise.all(
          fetchedIds.map(async (id) => {
            const response = await fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
            const data = await response.json();
            return data;
          })
        );

        setArticles((prevArticles) => [...prevArticles, ...fetchedArticles]);
        setLoading(false);
      };

      fetchArticles();
    }
  }, [articleIds, page]);

  const renderArticle = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsDetails", { article: item })}
      style={styles.articleContainer}
    >
      <Image
        source={require("../assets/images/Politics1.webp")}
        style={styles.articleImage}
      />
      <View style={styles.articleInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.source}>
          {item.by} • {new Date(item.time * 1000).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Handle lazy loading
  const handleLoadMore = () => {
    if (!loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1); 
    }
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: "#404040",
            lineHeight: 28.8,
          }}
        >
          Recommended
        </Text>
        <Text
          style={{
            color: "#156651",
            fontWeight: "700",
            textDecorationLine: "underline",
          }}
        >
          See More
        </Text>
      </View>

      
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} 
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#156651" /> : null}
        contentContainerStyle={styles.container} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  articleContainer: {
    flexDirection: "row",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  articleImage: {
    width: 120,
    height: 120,
  },
  articleInfo: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  source: {
    fontSize: 14,
    color: "#666",
  },
});

export default PoliticsNews;

