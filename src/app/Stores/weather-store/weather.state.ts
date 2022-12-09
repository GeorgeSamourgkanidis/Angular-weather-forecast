import { CurrentWeather } from 'src/app/data/interfaces/CurrentWeather';
import { Forecast5Weather } from 'src/app/data/interfaces/Forecast5Weather';

export interface WeatherState {
  city: string;
  loadingCurrent: boolean;
  currentData: CurrentWeather | null;
  loadingForecast: boolean;
  forecastData: Forecast5Weather | null;
}

export const initialState: WeatherState = {
  city: '',
  loadingCurrent: false,
  currentData: null,
  loadingForecast: false,
  forecastData: null
};
