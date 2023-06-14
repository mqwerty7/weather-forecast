import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './WeatherCurrent.scss';
import { useOutletContext } from 'react-router-dom';
import { ICurrentWeatherInfo, ILocationInfo } from '../../../../Interfaces';
import { ForecaApiService } from '../../../../services/forecaAPIService';
import { WeatherCurrentCard } from '../WeatherCurrentCard/WeatherCurrentCard';

export const WeatherCurrent: FunctionComponent = () => {
  const { id: locationId } = useOutletContext<ILocationInfo>();
  const [weatherInfo, setWeatherInfo] = useState<ICurrentWeatherInfo>();
  useEffect(() => {
    if (locationId) {
      ForecaApiService.getCurrentInfo(locationId).then(currentWeatherInfo => {
        setWeatherInfo(currentWeatherInfo);
      });
    }
  }, [locationId]);

  return (
    <div className={styles.container}>{weatherInfo && <WeatherCurrentCard {...weatherInfo} />}</div>
  );
};
