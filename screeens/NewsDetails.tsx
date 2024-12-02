import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";

const NewsDetails = () => {
  const navigation = useNavigation();
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
        <Text style={styles.title}>
          Rumors of Brazil national team, Ancelotti: Contract until 2024
        </Text>
        <View style={styles.authorContainer}>
          <FontAwesome name="user" size={16} color="gray" />
          <Text style={styles.authorText}>Alexander Mich:</Text>
          <Text style={styles.authorText}>18 Hours ago</Text>
        </View>
        <Text style={styles.content}>
          In a thrilling weekend of sports action, fans were treated to
          remarkable performances across various disciplines. The world of
          soccer witnessed a dramatic showdown as two top teams clashed in the
          league final. Manchester Strikers edged out the Barcelona Blues 3-2 in
          a nail-biting encounter. Star forward Liam Thompson delivered a
          sensational hat trick, cementing his position as one of the league’s
          top players this season. Barcelona’s captain, Diego Mendes, showed
          resilience by scoring two late goals, but it wasn’t enough to secure
          victory. Meanwhile, tennis enthusiasts were captivated by the finals
          of the Grand Slam tournament in Paris. Serena Carter, the 23-year-old
          sensation, stunned the world by defeating world number one Elena
          Petrovic in straight sets. Carter’s aggressive style and precise
          serves left her opponent struggling to find rhythm. This victory marks
          her first Grand Slam title and has set the stage for her to dominate
          the sport in the coming years. The basketball world also had its share
          of excitement as the National Championship entered its final stages.
          The New York Titans triumphed over the Los Angeles Blazers in a
          high-scoring game, finishing with a 120-115 victory. Titans’ point
          guard, Marcus Reid, was named the MVP for his outstanding performance,
          scoring 38 points and making crucial defensive plays in the final
          minutes. The Titans’ win sparked celebrations across New York as fans
          hailed their team's incredible journey this season. In cricket, the
          international series between India and Australia kept fans on the edge
          of their seats. The third test match saw India secure a historic win
          by chasing down a massive target of 350 runs on the final day. Skipper
          Rohit Sharma’s century and a gutsy knock by Rishabh Pant sealed the
          victory. Australia’s bowling attack, led by Pat Cummins, was
          relentless, but the Indian batsmen showcased exceptional
          determination. Over in motorsports, the Formula 1 Grand Prix in Monaco
          delivered its usual mix of glamour and high-octane drama. Defending
          champion Max Verstappen claimed his fourth consecutive win of the
          season, narrowly beating Lewis Hamilton by 0.5 seconds. Verstappen’s
          flawless driving and strategic pit stops proved decisive. The result
          has intensified the championship battle, with fans eagerly
          anticipating the next race in Silverstone. Golf fans enjoyed an
          unforgettable weekend at the Masters Tournament. Veteran player Phil
          Adams pulled off an unexpected victory, clinching his fifth green
          jacket at the age of 46. His precision on the greens and calm demeanor
          under pressure served as an inspiration to younger players. Adams’ win
          sparked discussions about the longevity of athletes in modern sports
          and their ability to compete at the highest level. Lastly, in the
          world of athletics, the Diamond League meet in Zurich saw several
          records shattered. Jamaican sprinter Alisha Morgan clocked an
          incredible 10.62 seconds in the 100m, becoming the fastest woman this
          year. In the men’s long jump, South Africa’s Pieter van Rensburg set a
          new meet record with a leap of 8.72 meters, thrilling the crowd. This
          weekend showcased the passion, talent, and unpredictability that make
          sports a universal language of inspiration and excitement.
        </Text>
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>
            Read to Arsene Wenger Believes Arsenal Will Win... This Year or Next
          </Text>
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
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 4,
  },
  readMoreText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default NewsDetails;
