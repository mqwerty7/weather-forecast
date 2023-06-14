export interface INavButtonProps {
  name: string;
  path: string;
}

export interface ISubNavProps {
  name: string;
  path: string;
}

export interface IWeatherImageProps {
  symbolCode: string;
  imgSize: string;
  symbolPhrase?: string;
}

export interface ILocationCoords {
  longitude: number;
  latitude: number;
}

export interface ILocationInfo {
  adminArea: string;
  adminArea2?: string;
  adminArea3?: string;
  country: string;
  id: number;
  language: string;
  lat: number;
  lon: number;
  name: string;
  timezone: string;
}

export interface ICurrentWeatherInfo {
  cloudiness: number;
  dewPoint: number;
  feelsLikeTemp: number;
  precipProb: number;
  precipRate: number;
  pressure: number;
  relHumidity: number;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  thunderProb: number;
  time: string;
  uvIndex: number;
  visibility: number;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
}

export interface IHourlyWeatherInfo {
  feelsLikeTemp: number;
  precipProb: number;
  precipAccum: number;
  symbol: string;
  temperature: number;
  time: string;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
}

export interface IDailyWeatherInfo {
  minTemp: number;
  maxTemp: number;
  precipAccum: number;
  symbol: string;
  date: string;
  windDir: number;
  maxWindSpeed: number;
}

export interface IFeedbackInfo {
  name: string;
  email: string;
  comments: string;
  date: string;
}
