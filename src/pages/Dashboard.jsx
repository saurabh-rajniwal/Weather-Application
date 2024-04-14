import { useState } from "react";
import DailyTemp from "../components/DailyTemp";
import Location from "../components/Location";
import TempGrid from "../components/TempGrid";
import TimeComponent from "../components/TimeComponent";
import useFetch from "../hooks/useFetch";
import { API_URLS } from "../constants/constants";
import useDailyForcast from "../hooks/useDailyForcast";

function Dashboard() {
  const [city, setCity] = useState("Delhi");
  const { data, isLoading } = useDailyForcast(city);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // const currentWeatherData = useFetch(API_URLS.CURRENT_WEATER(city));
  const {
    apiResponse: weatherForcastResponse,
    isLoading: isForcastDataLoading,
  } = useFetch(API_URLS.FORECAST(city)) || [];

  const weatherForcastData = weatherForcastResponse?.list || [];

  const hourlyForcastTime = weatherForcastData.map((item) => {
    const dateParts = item.dt_txt.split(" ");
    return dateParts[1];
  });

  const newDate = hourlyForcastTime
    .slice(0, 8)
    .map((time) => time.split(":")[0]);

  const temp = weatherForcastData.map((item) => {
    return item.main.temp;
  });

  const weather = weatherForcastData.map((item) => {
    return item.weather[0].main;
  });

  const handleClick = (value) => {
    setCity(value);
  };

  return (
    <div className="container">
      <div className="dailyWeather">
        <Location handleClick={handleClick} />

        {isLoading || isForcastDataLoading ? (
          <p className="dailyTempContainerError">Fetching data...</p>
        ) : (
          <>
            <DailyTemp
              humidity={data.humidity}
              temp={data.currentTemp}
              windspeed={data.windspeed}
              weather={weather}
              invalidCity={data.cityErrorMessage}
            />
            <div className="bottomContainer">
              {!data.cityErrorMessage &&
                weekDays.map((days, index) => (
                  <TempGrid
                    key={days}
                    days={days}
                    temp={temp[index + 8]}
                    weather={weather[index + 8]}
                    isCenterContainer={true}
                  />
                ))}
            </div>
          </>
        )}
      </div>
      <div className="hourlywWeather">
        {!data.cityErrorMessage && (
          <TimeComponent city={city} feelLike={data.feelLike} />
        )}
        <div className="hoursGrid">
          {newDate.map((hours, index) => (
            <TempGrid
              key={hours}
              time={hours}
              temp={temp[index]}
              weather={weather[index]}
              isCenterContainer={false}
            />
          ))}
          {!data.cityErrorMessage && (
            <div className="informationText">
              <span>
                Want to know more
                <a
                  href={`https://en.wikivoyage.org/wiki/${city}`}
                  target="_blank"
                >
                  {" "}
                  Lets Search
                </a>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
