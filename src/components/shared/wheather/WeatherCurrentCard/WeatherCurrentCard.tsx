import React, { FunctionComponent } from 'react';
import styles from './WeatherCurrentCard.scss';
import { ICurrentWeatherInfo } from '../../../../Interfaces';
import { WeatherImage } from '../WeatherImage/WeatherImage';

export const WeatherCurrentCard: FunctionComponent<ICurrentWeatherInfo> = weatherInfo => {
  const time = new Date(weatherInfo.time).toLocaleTimeString();
  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <WeatherImage
          symbolCode={weatherInfo.symbol}
          imgSize={'large'}
          symbolPhrase={weatherInfo.symbolPhrase}
        />
        <div className={styles.temperature}>{weatherInfo.temperature}°C</div>
        <div className={styles.time}>{time}</div>
      </div>
      <div className={styles.secondInfo}>
        <div className={styles.leftSide}>
          <div className={styles.paramWrapper}>
            <div>Feels like temperature:</div>
            <div>{weatherInfo.feelsLikeTemp}°C</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Wind speed:</div>
            <div>{weatherInfo.windSpeed}m/s</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Wind direction:</div>
            <div>{weatherInfo.windDirString}</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Wind gust:</div>
            <div>{weatherInfo.windGust}m/s</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Relative humidity:</div>
            <div>{weatherInfo.relHumidity}%</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Probability of precipitation:</div>
            <div>{weatherInfo.precipProb}%</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Atmospheric pressure:</div>
            <div>{weatherInfo.pressure}hPa</div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.paramWrapper}>
            <div>Dew point:</div>
            <div>{weatherInfo.dewPoint}°C</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Intensity of precipitation rate:</div>
            <div>{weatherInfo.precipRate}mm/h</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Cloudiness:</div>
            <div>{weatherInfo.cloudiness}hPa</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Probability of thunder nearby:</div>
            <div>{weatherInfo.thunderProb}%</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>UV index:</div>
            <div>{weatherInfo.uvIndex}</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Visibility:</div>
            <div>{weatherInfo.visibility}m</div>
          </div>
        </div>
      </div>
    </div>
  );
};
