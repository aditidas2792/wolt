import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./title.styles";

const Title = () => (
  <View style={styles.titleContainer}>
    <MaterialIcons name="access-time" size={24} style={styles.titleIcon} />
    <Text style={styles.titleText}>Opening hours</Text>
  </View>
);

export default Title;
