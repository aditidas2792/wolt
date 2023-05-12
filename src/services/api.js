import openingHoursData from '../data/openingHoursData';

export const getOpeningHoursData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(openingHoursData);
      }, 1000);
    });
  };