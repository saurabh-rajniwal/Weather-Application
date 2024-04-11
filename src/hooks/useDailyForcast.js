import { API_URLS } from "../constants/constants";
import useFetch from "./useFetch";

function useDailyForcast(city) {
  const { apiResponse, isLoading } = useFetch(API_URLS.CURRENT_WEATER(city));

  const currentWeatherData = apiResponse;
  const currentTemp = currentWeatherData?.main?.temp;
  const humidity = currentWeatherData?.main?.humidity;
  const feelLike = currentWeatherData?.main;
  const windspeed = currentWeatherData?.wind?.speed;

  const data = {
    currentTemp,
    humidity,
    feelLike,
    windspeed,
  };
  return { data, isLoading };
}

export default useDailyForcast;
