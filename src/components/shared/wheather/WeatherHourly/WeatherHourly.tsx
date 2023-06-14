import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './WeatherHourly.scss';
import { useOutletContext } from 'react-router-dom';
import { IHourlyWeatherInfo, ILocationInfo } from '../../../../Interfaces';
import { ForecaApiService } from '../../../../services/forecaAPIService';
import { WeatherHourlyCard } from '../WeatherHourlyCard/WeatherHourlyCard';

export const WeatherHourly: FunctionComponent = () => {
  const { id: locationId } = useOutletContext<ILocationInfo>();
  const [weatherInfoArray, setWeatherInfo] = useState<IHourlyWeatherInfo[]>([]);
  useEffect(() => {
    if (locationId) {
      ForecaApiService.getHourlyForecast(locationId).then(hourlyWeatherInfo => {
        setWeatherInfo(hourlyWeatherInfo);
      });
    }
  }, [locationId]);

  return (
    <div className={styles.container}>
      {weatherInfoArray &&
        weatherInfoArray.map(weatherInfo => {
          return <WeatherHourlyCard key={weatherInfo.time} {...weatherInfo} />;
        })}
    </div>
  );
};
