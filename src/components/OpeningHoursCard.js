import React from "react";
import { View } from "react-native";
import { daysOfWeek } from "../utilities/constants";
import { getOpeningHours } from "../utilities/openingHoursHelper";
import { styles } from "./openingHoursCard.styles";
import { useFonts } from "expo-font";
import Title from "./common/title/Title";
import Row from "./common/row/Row";

const OpeningHoursCard = ({ openingHours }) => {
  // Load fonts using the useFonts hook
  const [fontsLoaded] = useFonts(styles.fonts);

  // Get the timing strings for each day from the opening hours
  const timingStrings = getOpeningHours(openingHours);

  // If fonts are not loaded or timing strings are not available, render nothing
  if (!fontsLoaded || !timingStrings) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <Title />
      {daysOfWeek.map((day) => (
        <Row key={day} day={day} timingString={timingStrings[day]} />
      ))}
    </View>
  );
};

export default OpeningHoursCard;
