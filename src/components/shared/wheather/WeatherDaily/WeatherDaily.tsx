import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './WeatherDaily.scss';
import { useOutletContext } from 'react-router-dom';
import { IDailyWeatherInfo, ILocationInfo } from '../../../../Interfaces';
import { ForecaApiService } from '../../../../services/forecaAPIService';
import { WeatherDailyCard } from '../WeatherDailyCard/WeatherDailyCard';

export const WeatherDaily: FunctionComponent = () => {
  const { id: locationId } = useOutletContext<ILocationInfo>();
  const [weatherInfoArray, setWeatherInfo] = useState<IDailyWeatherInfo[]>([]);
  useEffect(() => {
    if (locationId) {
      ForecaApiService.getDailyForecast(locationId).then(dailyWeatherInfo => {
        setWeatherInfo(dailyWeatherInfo);
      });
    }
  }, [locationId]);

  return (
    <div className={styles.container}>
      {weatherInfoArray &&
        weatherInfoArray.map(weatherInfo => {
          return <WeatherDailyCard key={weatherInfo.date} {...weatherInfo} />;
        })}
    </div>
  );
};
