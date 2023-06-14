import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './Home.scss';
import { SubNav } from '../../shared/SubNav/SubNav';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GeolocationService } from '../../../services/geolocationService';
import { ForecaApiService } from '../../../services/forecaAPIService';
import { ILocationInfo } from '../../../Interfaces';

export const Home: FunctionComponent = () => {
  const [locationInfo, setLocationInfo] = useState<ILocationInfo>({
    adminArea: '',
    country: '',
    id: 0,
    language: '',
    lat: 0,
    lon: 0,
    name: '',
    timezone: ''
  });
  const navigate = useNavigate();
  const locations = useLocation();

  useEffect(() => {
    GeolocationService.getGeolocation().then(coords => {
      ForecaApiService.getLocationInfo(coords).then(info => {
        setLocationInfo(info);
      });
    });
  }, []);

  useEffect(() => {
    if (locations.pathname === '/weather' && locationInfo.id) {
      navigate(`/weather/${locationInfo.id}/current`);
    }
  }, [locations.pathname, locationInfo.id, navigate]);

  return (
    <>
      <div className={styles.container}>
        <SubNav />
        <Outlet context={locationInfo} />
      </div>
    </>
  );
};
