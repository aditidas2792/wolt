import { TimingType, daysOfWeek } from "./constants";
import { formatTime } from "./helper";

export const getOpeningHours = (openingHours) => {
  // Object to store timing strings for each day
  const timingStrings = {};

  // Loop through each day of the week
  daysOfWeek.forEach((day, dayIndex) => {
    const dayHours = openingHours[day];

    // If no opening hours are available for the day, assign an empty string
    if (!dayHours || dayHours.length === 0) {
      timingStrings[day] = "";
      return;
    }

    let openingHoursText = "";
    let previousType = null;

    // Loop through each hour of the day
    dayHours.forEach((hour) => {
      const { type, value } = hour;
      const formattedTime = formatTime(value);

      // Determine the type of opening hours (Open or Close)
      if (!previousType && type === TimingType.Close) {
        // Concatenate closing time to the previous day's timing string
        timingStrings[daysOfWeek[dayIndex - 1 >= 0 ? dayIndex - 1 : 6]] += ` - ${formattedTime}`;
      } else if (type === TimingType.Open) {
        // Concatenate opening time to the current day's timing string
        openingHoursText += `${openingHoursText ? ", " : ""}${formattedTime}`;
        previousType = type;
      } else if (type === TimingType.Close && previousType === TimingType.Open) {
        // Concatenate closing time to the current day's timing string
        openingHoursText += ` - ${formattedTime}`;
        previousType = type;
      }
    });

    // Assign the timing string to the current day
    timingStrings[day] = openingHoursText;
  });

  return timingStrings;
};
