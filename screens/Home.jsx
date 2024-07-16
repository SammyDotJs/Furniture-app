import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import SafeArea from "../utils/SafeArea";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";

const Home = () => {
  return (
    <SafeArea>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text style={styles.location}> Shanghai China</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
