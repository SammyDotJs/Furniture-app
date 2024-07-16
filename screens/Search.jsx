import { View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import SafeArea from "../utils/SafeArea";
import { COLORS, SIZES } from "../constants";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <SafeArea>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onPress={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};

export default Search;
