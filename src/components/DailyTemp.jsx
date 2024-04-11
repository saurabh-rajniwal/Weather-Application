import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faWind } from "@fortawesome/free-solid-svg-icons";

function DailyTemp({ temp, humidity, windspeed, weather }) {
  return (
    <div className="dailyTempContainer">
      <div className="dailyTempDataContainer">
        <p className="tempContainer">{Math.trunc(temp - 273.15)}&#176;</p>
        <p className="weathContainer">{weather[0]}</p>
      </div>
      <div className="dailyDataContainer">
        <div className="iconContainer">
          <FontAwesomeIcon icon={faTint} />
          <p className="atmosphereContainer">
            &nbsp;
            {humidity}&nbsp;%
          </p>
        </div>
        <div className="iconContainer">
          <FontAwesomeIcon icon={faWind} />
          <p className="atmosphereContainer">{windspeed}&nbsp;mps</p>
        </div>
      </div>
    </div>
  );
}

export default DailyTemp;
