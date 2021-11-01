import axios from "axios";

const api = "c1239d3df0c72828de1f1318a73eb344";
const language = "en";

export const getData = async (city) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=${language}`
  );
};
