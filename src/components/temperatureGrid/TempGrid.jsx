import "./TempGrid.css";

function TempGrid({ time, temp, weather, days, isCenterContainer }) {
  const ampm = time >= 12 ? "PM" : "AM";

  return (
    <div className="tempGridContainer">
      {isCenterContainer ? (
        <p className="tempGridElementDays__days">{days}</p>
      ) : (
        <p className="tempGridElementDays__hour">
          {time} {ampm}
        </p>
      )}
      <p
        className={
          isCenterContainer
            ? "tempGridElementDays__tempWeekly"
            : "tempGridElementDays__tempHourly"
        }
      >
        {Math.trunc(temp - 273.15)}&#176;
      </p>
      <p
        className={
          isCenterContainer
            ? "tempGridElementDays__dailyWeather"
            : "tempGridElementDays__hourWeather"
        }
      >
        {weather}
      </p>
    </div>
  );
}

export default TempGrid;
