import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faWind } from "@fortawesome/free-solid-svg-icons";
import "./DailyTemp.css";

function DailyTemp({ temp, humidity, windspeed, weather, invalidCity }) {
  return invalidCity ? (
    <p className="daily-temp__error">City Not Found</p>
  ) : (
    <div className="daily-temp">
      <div className="daily-temp__main">
        <p className="daily-temp__temperature">
          {Math.trunc(temp - 273.15)}&#176;
        </p>
        <p className="daily-temp__weather">{weather[0]}</p>
      </div>
      <div className="daily-temp__details">
        <div className="daily-temp__detail">
          <FontAwesomeIcon icon={faTint} />
          <p className="daily-temp__humidity">
            &nbsp;
            {humidity}&nbsp;%
          </p>
        </div>
        <div className="daily-temp__detail">
          <FontAwesomeIcon icon={faWind} />
          <p className="daily-temp__humidity">{windspeed}&nbsp;mps</p>
        </div>
      </div>
    </div>
  );
}

export default DailyTemp;
