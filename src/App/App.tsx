import React from 'react';
import styles from './App.scss';
import { Provider } from 'react-redux';
import { Header } from '../components/header/Header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/main/Home/Home';
import { Locations } from '../components/main/Locations/Locations';
import { Information } from '../components/main/Information/Information';
import { Feedback } from '../components/main/Feedback/Feedback';
import { ErrorPage } from '../components/shared/ErrorPage';
import { ForecaApiService } from '../services/forecaAPIService';
import { store } from '../redux/store';
import { WeatherCurrent } from '../components/shared/wheather/WeatherCurrent/WeatherCurrent';
import { WeatherHourly } from '../components/shared/wheather/WeatherHourly/WeatherHourly';
import { WeatherDaily } from '../components/shared/wheather/WeatherDaily/WeatherDaily';

export const App = () => {
  ForecaApiService.authorization();

  return (
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
      <div className={styles.pageBody}>
        <Routes>
          <Route path={'*'} element={<ErrorPage />} />
          <Route path={''} element={<Navigate to="/weather" replace={true} />} />
          <Route path={'weather'} element={<Home />}>
            <Route path={':locationId/current'} element={<WeatherCurrent />} />
            <Route path={':locationId/hourly'} element={<WeatherHourly />} />
            <Route path={':locationId/daily'} element={<WeatherDaily />} />
          </Route>
          <Route path={'locations'} element={<Locations />} />
          <Route path={'information'} element={<Information />} />
          <Route path={'feedback'} element={<Feedback />} />
        </Routes>
      </div>
      <footer className={styles.pageFooter}>All Rights Reserved</footer>
    </Router>
  );
};
