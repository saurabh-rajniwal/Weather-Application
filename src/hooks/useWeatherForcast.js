import { useEffect, useState } from "react";
import { API_URLS } from "../constants/constants";
import useFetch from "./useFetch";

const useWeaterForcast = (city) => {
  const weatherForcastData = useFetch(API_URLS.FORECAST(city))?.list || [];
  const hourlyForcastTime = weatherForcastData.map((item) => {
    return new Date(item.dt_txt);
  });

  const actualHours = hourlyForcastTime
    .slice(0, 8)
    .map((date) => date.getHours());

  const temp = weatherForcastData.map((item) => {
    return item.main.temp;
  });
};

export default useWeaterForcast;
