import { Platform, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const isAndroid = Platform.OS === "android";
const StatBar = StatusBar.currentHeight;

export default function SafeArea({ children }) {
  return (
    <SafeAreaView style={{ marginTop: isAndroid && StatBar * 2}}>
      {children}
    </SafeAreaView>
  );
}
