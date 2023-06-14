import { ILocationCoords } from '../Interfaces';

export const GeolocationService = {
  getGeolocation: (): Promise<ILocationCoords> => {
    return new Promise<ILocationCoords>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude: number = position.coords.latitude;
          const longitude: number = position.coords.longitude;
          const pos: ILocationCoords = { latitude: latitude, longitude: longitude };
          resolve(pos);
        },
        error => {
          reject(error);
        }
      );
    });
  }
};
