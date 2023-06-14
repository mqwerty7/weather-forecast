import React, { FunctionComponent } from 'react';
import styles from './WeatherHourlyCard.scss';
import { IHourlyWeatherInfo } from '../../../../Interfaces';
import { WeatherImage } from '../WeatherImage/WeatherImage';

export const WeatherHourlyCard: FunctionComponent<IHourlyWeatherInfo> = weatherInfo => {
  const time = new Date(weatherInfo.time).toLocaleTimeString();
  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <WeatherImage symbolCode={weatherInfo.symbol} imgSize={'small'} />
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
            <div>Probability of precipitation:</div>
            <div>{weatherInfo.precipProb}%</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Accumulated 1 hour precipitation:</div>
            <div>{weatherInfo.precipAccum}mm</div>
          </div>
        </div>
        <div className={styles.rightSide}>
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
        </div>
      </div>
    </div>
  );
};
