import React from "react";
import { Text, View } from "react-native";
import OpeningHours from "./src/components/OpeningHours";
import { styles } from "./App.styles.js";

export default function App() {
  return (
    <View style={styles.container}>
      <OpeningHours />
    </View>
  );
}
