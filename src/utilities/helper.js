export const formatTime = (seconds) => {
  // Ensure the total seconds are within one day (24 * 60 * 60)
  const totalSeconds = seconds % 86400;
  
  const hours = Math.floor(totalSeconds / 3600);
  
  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;
 
  // Determine AM/PM designation
  const ampm = hours < 12 ? "AM" : "PM";
  const formattedTime = String(formattedHours) + " " + ampm;
  return formattedTime;
};
