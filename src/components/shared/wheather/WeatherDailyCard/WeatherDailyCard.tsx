import React, { FunctionComponent } from 'react';
import styles from './WeatherDailyCard.scss';
import { IDailyWeatherInfo } from '../../../../Interfaces';
import { WeatherImage } from '../WeatherImage/WeatherImage';

export const WeatherDailyCard: FunctionComponent<IDailyWeatherInfo> = weatherInfo => {
  const date = new Date(weatherInfo.date).toLocaleDateString();
  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <WeatherImage symbolCode={weatherInfo.symbol} imgSize={'small'} />
        <div className={styles.temperature}>
          {weatherInfo.minTemp}°C - {weatherInfo.maxTemp}°C
        </div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.secondInfo}>
        <div className={styles.leftSide}>
          <div className={styles.paramWrapper}>
            <div>Maximum wind speed:</div>
            <div>{weatherInfo.maxWindSpeed}m/s</div>
          </div>
          <div className={styles.paramWrapper}>
            <div>Wind direction at maximum wind speed:</div>
            <div>{weatherInfo.windDir}</div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.paramWrapper}>
            <div>Accumulated precipitation:</div>
            <div>{weatherInfo.precipAccum}mm</div>
          </div>
        </div>
      </div>
    </div>
  );
};
