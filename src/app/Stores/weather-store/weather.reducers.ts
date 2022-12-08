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
  on(getCurrentDataSuccess, (state, currentWeather) => {
    console.log('currentWeather', currentWeather);

    return { ...state, loadingCurrent: false };
  }),
  on(getCurrentDataFail, (state) => ({
    ...state,
    loadingCurrent: false
  })),

  on(getFourDaysData, (state) => ({
    ...state,
    loadingForecast: true
  })),
  on(getFourDaysDataSuccess, (state, forecast5) => {
    console.log('forecastWeather', forecast5);

    return { ...state, loadingForecast: false };
  }),
  on(getFourDaysDataFail, (state) => ({
    ...state,
    loadingForecast: false
  }))
);

export function weatherReducer(state: any, action: any) {
  return _weatherReducer(state, action);
}
