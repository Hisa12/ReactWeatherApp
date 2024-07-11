//openweather
const KEY = process.env.REACT_APP_API_KEY;
const currentBASE = "http://api.openweathermap.org/data/2.5/";

export const URL = (search, TYPE) =>
  `${currentBASE}${TYPE}?q=${search}&units=metric&APPID=${KEY}`;
