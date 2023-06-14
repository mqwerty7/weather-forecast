import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './Locations.scss';
import { ForecaApiService } from '../../../services/forecaAPIService';
import { ILocationInfo } from '../../../Interfaces';
import { Link } from 'react-router-dom';

export const Locations: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [locationList, setLocationList] = useState<ILocationInfo[]>();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    ForecaApiService.locationSearch(searchValue).then(list => {
      setLocationList(list);
    });
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        placeholder={'Search locations'}
        value={searchValue}
        onInput={handleInput}
      />
      <ul className={styles.list}>
        {locationList &&
          locationList.map(locationInfo => {
            return (
              <li key={locationInfo.id}>
                <Link to={`/weather/${locationInfo.id}/current`}>
                  {locationInfo.country} / {locationInfo.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
