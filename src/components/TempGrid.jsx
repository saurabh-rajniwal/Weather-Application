function TempGrid({ time, temp, weather, days, isCenterContainer }) {
  const ampm = time >= 12 ? "PM" : "AM";

  return (
    <div className="tempGridLayout">
      {isCenterContainer ? (
        <p className="tempGridElementDays">{days}</p>
      ) : (
        <p className="tempGridElement">
          {time} {ampm}
        </p>
      )}
      <p
        className={
          isCenterContainer
            ? "tempGridElementTempWeekly"
            : "tempGridElementTempHourly"
        }
      >
        {Math.trunc(temp - 273.15)}&#176;
      </p>
      <p
        className={
          isCenterContainer
            ? "tempGridElementWeather"
            : "tempGridElementHourWeather"
        }
      >
        {weather}
      </p>
    </div>
  );
}

export default TempGrid;
