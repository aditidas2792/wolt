import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./openingHours.styles";
import { getOpeningHoursData } from "../services/api";



const formatTime = (time) => {
  const date = new Date(time * 1000);
  const offsetInMinutes = date.getTimezoneOffset();
  let hours = date.getHours() + offsetInMinutes / 60;
  const minutes = date.getMinutes();
  let period = 'AM';

  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  return `${hours === 0 ? '12' : hours}:${minutes.toString().padStart(2, '0')} ${period}`;
};


const getOpeningHoursText = (day, openingHours) => {
  const today = new Date().toLocaleString("en-US", { weekday: "long" }).toLowerCase();
  const dayHours = openingHours[day];
  const isToday = day.toLowerCase().localeCompare(today) === 0;

  let openingHoursText = "";

  if (isToday) {
    openingHoursText += "TODAY";
  }

  if (!dayHours || dayHours.length === 0) {
    return <Text style={styles.closedHoursText}>Closed</Text>;
  }

  let previousType = null;
  let closingTime = null;
  let hasOpenShift = false;

  for (let i = 0; i < dayHours.length; i++) {
    const hour = dayHours[i];
    if (hour.type === "open") {
      if (openingHoursText !== "") {
        openingHoursText += " - ";
      }
      openingHoursText += `${formatTime(hour.value)}`;
      previousType = "open";
      closingTime = null;
      hasOpenShift = true;
    } else if (hour.type === "close" && previousType === "open") {
      openingHoursText += `-${formatTime(hour.value)}`;
      previousType = "close";
      closingTime = hour.value;
    } else if (hour.type === "open" && previousType === "close") {
      openingHoursText += `, ${formatTime(closingTime)} - ${formatTime(hour.value)}`;
      previousType = "open";
      closingTime = null;
      hasOpenShift = true;
    } else if (hour.type === "close" && !hasOpenShift) {
      const prevDay = getPrevDay(day);
      const prevDayHours = openingHours[prevDay];
      if (prevDayHours && prevDayHours.length > 0 && prevDayHours[prevDayHours.length - 1].type === "open") {
        openingHoursText += `${formatTime(prevDayHours[prevDayHours.length - 1].value)}-`;
        openingHoursText += `${formatTime(hour.value)}`;
        previousType = "close";
        closingTime = hour.value;
        hasOpenShift = true;
      }
    }

    // If closing time is not available, check the next object's first close time
    if (!closingTime && i === dayHours.length - 1) {
      const nextDay = getNextDay(day);
      const nextDayHours = openingHours[nextDay];
      if (nextDayHours && nextDayHours.length > 0 && nextDayHours[0].type === "close") {
        closingTime = nextDayHours[0].value;
      } else {
        closingTime = getNoonTime(getNextDay(day));
      }
      openingHoursText += `-${formatTime(closingTime)}`;
      previousType = "close";
    }
  }

  if (previousType === "open") {
    openingHoursText += `-${formatTime(closingTime)}`;
  }

  return <Text style={styles.openHours}>{openingHoursText}</Text>;
};

const getPrevDay = (day) => {
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const prevDayIndex = (daysOfWeek.indexOf(day) - 1 + 7) % 7;
  return daysOfWeek[prevDayIndex];
};



const getNextDay = (day) => {
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const nextDayIndex = (daysOfWeek.indexOf(day) + 1) % 7;
  return daysOfWeek[nextDayIndex];
};

const getNoonTime = (day) => {
  const date = new Date();
  date.setDate(date.getDate() + (day - date.getDay() + 7) % 7);
  date.setHours(0, 0, 0, 0);
  return Math.round(date.getTime() / 1000);
};


// const formatTime = (time) => {
//   const date = new Date(time * 1000);
//   return date.toLocaleTimeString("en-US", {
//     hour: "numeric",
//     hour12: true,
//   }).replace(":00", "").toLowerCase();
// };


// const getOpeningHoursText = (day, openingHours) => {
//   const today = new Date()
//     .toLocaleString("en-US", { weekday: "long" })
//     .toLowerCase();
//   const dayHours = openingHours[day];
//   const isToday = day.toLowerCase().localeCompare(today) === 0;

//   let openingHoursText = "";

//   if (isToday) {
//     openingHoursText += "TODAY";
//   }

//   if (!dayHours || dayHours.length === 0) {
//     return <Text style={styles.closedHoursText}>Closed</Text>;
//   }
 

//   let previousType = null;
//   dayHours.forEach((hour) => {
//     if (hour.type === "open") {
//       if (openingHoursText !== "") {
//         openingHoursText += " - ";
//       }
//       openingHoursText += `${formatTime(hour.value)}`;
//       previousType = "open";
//     } else if (hour.type === "close" && previousType === "open") {
//       openingHoursText += `-${formatTime(hour.value)}`;
//       previousType = "close";
//     }
//   });

//   if (previousType === "open") {
//     openingHoursText += "-12 AM";
//   }

//   return <Text style={styles.openHours}>{openingHoursText}</Text>;
// };

const OpeningHours = () => {
  const [fontsLoaded] = useFonts(styles.fonts);
  const [openingHours, setOpeningHours] = useState(null);

  useEffect(() => {
    getOpeningHoursData().then((data) => setOpeningHours(data));
  }, []);

  if (!fontsLoaded || !openingHours) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="access-time" size={24} style={styles.titleIcon} />
        <Text style={styles.titleText}>Opening hours</Text>
      </View>
      {Object.keys(openingHours).map((day) => (
        <View key={day} style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.dayText}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
              {day.toLowerCase().localeCompare(new Date().toLocaleString("en-US", { weekday: "long" }).toLowerCase()) === 0 &&
          <Text style={styles.todayText}> TODAY</Text>}
            </Text>
            <Text style={styles.openHoursText}>
              {getOpeningHoursText(day, openingHours)}
            </Text>
          </View>
          <View style={styles.underline}></View>
        </View>
      ))}
    </View>
  );
};

export default OpeningHours;
