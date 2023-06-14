import React, { FunctionComponent } from 'react';
import styles from './Information.scss';

export const Information: FunctionComponent = () => {
  return (
    <div className={styles.information}>
      Our weather forecast app can display weekly, daily and hourly weather reports. From them you
      will learn about the actual and perceived temperature, humidity, precipitation, wind speed and
      direction, as well as the time of sunrise and sunset. You will also be informed about the
      intensity of the ultraviolet radiation if you are going to sunbathe. You can find out the
      weather for your current location as well as for many points around the world.
    </div>
  );
};
