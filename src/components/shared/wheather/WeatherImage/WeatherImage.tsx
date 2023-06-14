import React, { FunctionComponent } from 'react';
import styles from './WeatherImage.scss';
import { IWeatherImageProps } from '../../../../Interfaces';

export const WeatherImage: FunctionComponent<IWeatherImageProps> = ({
  symbolCode,
  imgSize,
  symbolPhrase
}) => {
  return (
    <img
      className={styles[imgSize]}
      alt={symbolPhrase ? symbolPhrase : ''}
      src={`https://developer.foreca.com/static/images/symbols/${symbolCode}.png`}
    />
  );
};
