function TempGrid({ time, temp, weather, days, isCenterContainer }) {
  const ampm = time >= 12 ? "PM" : "AM";

  return (
    <div className="tempGridLayout">
      {isCenterContainer ? (
        <p className="tempGridElement">{days}</p>
      ) : (
        <p className="tempGridElement">
          {time} {ampm}
        </p>
      )}
      <p className="tempGridElementTemp">{Math.trunc(temp - 273.15)}&#176;</p>
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
