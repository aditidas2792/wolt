import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import OpeningHoursCard from "./src/components/OpeningHoursCard";
import { styles } from "./App.styles.js";
import { getOpeningHoursData } from "./src/services/api";

export default function App() {
  // State to store the opening hours data
  const [openingHours, setOpeningHours] = useState(null);

  useEffect(() => {
    // Fetch the opening hours data on component mount
    getOpeningHoursData()
      .then((data) => {
        setOpeningHours(data);
      })
      .catch((error) => {
        console.error("Error fetching opening hours data:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* Display the OpeningHoursCard if opening hours data is available, otherwise show "Loading..." */}
      {openingHours ? (
        <OpeningHoursCard openingHours={openingHours} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
