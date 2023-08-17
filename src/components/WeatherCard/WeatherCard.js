import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({
  day,
  type,
  weatherTemp = "",
  currentTemperatureUnit = "",
}) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp} °{currentTemperatureUnit}
      </div>
      <img className="weather_image" src={imageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
