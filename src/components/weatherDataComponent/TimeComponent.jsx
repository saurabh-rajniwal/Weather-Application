import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import "./TimeComponent.css";

function TimeComponent({ city, feelLike }) {
  return (
    <div className="weatherDetailContainer">
      <p className="weatherDetailContainer__city">{city}</p>
      <div className="weatherDetailContainer__tempDetails">
        <div>
          <FontAwesomeIcon icon={faTemperatureLow} />
          <span>{Math.trunc(feelLike?.temp_min - 273.15)}&#176;</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faTemperatureHigh} />
          <span>&nbsp;{Math.trunc(feelLike?.temp_max - 273.15)}&#176;</span>
        </div>
      </div>
      <p>Feels like {Math.trunc(feelLike?.feels_like - 273.15)}&#176;</p>
    </div>
  );
}

export default TimeComponent;
