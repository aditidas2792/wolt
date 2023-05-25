import React from "react";
import { Text, View } from "react-native";
import { styles } from "./row.styles";

const Row = ({ day, timingString }) => {
  // Capitalizes the first letter of a string
  const isFirstLetterUppercase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Checks if the provided day is today
  const isToday = (str) => {
    return (
      str
        .toLowerCase()
        .localeCompare(
          new Date().toLocaleString("en-US", { weekday: "long" }).toLowerCase()
        ) === 0
    );
  };

  // Renders the "TODAY" text if it is today
  const renderTodayText = (isToday) => {
    if (isToday) {
      return <Text style={styles.todayText}>TODAY</Text>;
    }
    return null;
  };

  // Renders the open hours or closed status
  const renderOpenHours = (timingString) => {
    if (timingString && timingString.length > 0) {
      return <Text style={styles.openHours}>{timingString}</Text>;
    }
    return <Text style={styles.closedHoursText}>Closed</Text>;
  };

  return (
    <View key={day} style={styles.row}>
      <View style={styles.rowContainer}>
        <Text style={styles.dayText}>
          {isFirstLetterUppercase(day)}
          {/* Renders the "TODAY" text if it is today */}
          {renderTodayText(isToday(day))}
        </Text>
        <Text style={styles.openHoursText}>
          {renderOpenHours(timingString)}
        </Text>
      </View>
      <View style={styles.underline}></View>
    </View>
  );
};

export default Row;
