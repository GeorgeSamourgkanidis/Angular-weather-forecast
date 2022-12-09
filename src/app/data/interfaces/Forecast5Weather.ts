import { ForecastItem } from './ForecastItem';

export interface Forecast5Weather {
  city: {
    coord: {};
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: ForecastItem[];
}
