import axios from 'axios';
import { LocalStorageService } from './localStorageService';
import {
  ICurrentWeatherInfo,
  IHourlyWeatherInfo,
  ILocationCoords,
  ILocationInfo
} from '../Interfaces';

const contextPath = 'https://pfa.foreca.com/api/v1';

export const ForecaApiService = {
  authorization: () => {
    axios
      .post(
        `/authorize/token?user=${process.env.API_USERNAME}&password=${process.env.API_PASSWORD}`
      )
      .then(response => {
        LocalStorageService.setToken(response.data.access_token);
      });
  },

  getLocationInfo: (locationCoords: ILocationCoords): Promise<ILocationInfo> => {
    const token = LocalStorageService.getToken();

    return axios
      .get(`${contextPath}/location/${locationCoords.longitude},${locationCoords.latitude}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data);
  },

  getCurrentInfo: (locationId: number): Promise<ICurrentWeatherInfo> => {
    const token = LocalStorageService.getToken();

    return axios
      .get(`${contextPath}/current/${locationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data.current);
  },

  getHourlyForecast: (id: number): Promise<IHourlyWeatherInfo[]> => {
    const token = LocalStorageService.getToken();

    return axios
      .get(`${contextPath}/forecast/hourly/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data.forecast);
  },

  getDailyForecast: (id: number) => {
    const token = LocalStorageService.getToken();

    return axios
      .get(`${contextPath}/forecast/daily/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data.forecast);
  },

  locationSearch: (term: string): Promise<ILocationInfo[]> => {
    const token = LocalStorageService.getToken();

    return axios
      .get(`${contextPath}/location/search/${term}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data.locations);
  }
};
