import { createReducer, on } from '@ngrx/store';
import { CurrentWeather } from 'src/app/data/interfaces/CurrentWeather';
import {
  getCurrentData,
  getCurrentDataSuccess,
  getCurrentDataFail,
  getFourDaysData,
  getFourDaysDataSuccess,
  getFourDaysDataFail
} from './weather.actions';
import { initialState } from './weather.state';

const _weatherReducer = createReducer(
  initialState,
  on(getCurrentData, (state) => ({
    ...state,
    loadingCurrent: true
  })),
  on(getCurrentDataSuccess, (state, { city, currentWeather }) => {
    return { ...state, city: city, loadingCurrent: false, currentData: currentWeather };
  }),
  on(getCurrentDataFail, (state) => ({
    ...state,
    loadingCurrent: false
  })),

  on(getFourDaysData, (state) => ({
    ...state,
    loadingForecast: true
  })),
  on(getFourDaysDataSuccess, (state, { city, forecast5 }) => {
    const days = 4;

    // Keep the first 4 days (each day has 24/3 = 8 sets of data every 3 hours)
    const forecastData = { ...forecast5, list: forecast5.list.slice(0, days * 8) };

    return { ...state, city: city, loadingForecast: false, forecastData: forecastData };
  }),
  on(getFourDaysDataFail, (state) => ({
    ...state,
    loadingForecast: false
  }))
);

export function weatherReducer(state: any, action: any) {
  return _weatherReducer(state, action);
}
