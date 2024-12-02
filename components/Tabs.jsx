import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import HottestNews from "../components/HottestNews";
import SportNews from "../components/SportNews";

import PoliticsNews from "../components/PoliticsNews";

import EducationalNews from "../components/EducationalNews";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Hotest");

  const renderContent = () => {
    switch (activeTab) {
      case "Hotest":
        return <HottestNews />;
      case "Sport":
        return <SportNews />;
      case "Politics":
        return <PoliticsNews />;
      case "Education":
        return <EducationalNews />;
      case "Entertainment":
        return <Text style={styles.content}>Entertainment News Content</Text>;
      case "Others":
        return <Text style={styles.content}>Other News Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
      >
        {[
          "Hotest",
          "Sport",
          "Politics",
          "Education",
          "Entertainment",
          "Others",
        ].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab, // Highlight active tab
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Content */}
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 0,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentContainer: {
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    color: "#333",
  },
});

export default TabComponent;
