import openingHoursData from "../data/openingHoursData";

export const getOpeningHoursData = () => {
  return new Promise((resolve) => {
    // Simulate asynchronous behavior using setTimeout
    setTimeout(() => {
      resolve(openingHoursData);
    }, 1000); // Resolve the promise after 1000 milliseconds (1 second)
  });
};
