import { createReducer, on } from '@ngrx/store';
import {
  getCurrentData,
  getCurrentDataByLongitudeLatitude,
  getCurrentDataSuccess,
  getCurrentDataFail,
  getFourDaysData,
  getFourDaysDataSuccess,
  getFourDaysDataFail,
  saveFourDaysData,
  getFourDaysDataByLongitudeLatitude
} from './weather.actions';
import { initialState } from './weather.state';

const _weatherReducer = createReducer(
  initialState,
  on(getCurrentData, getCurrentDataByLongitudeLatitude, (state) => ({
    ...state,
    loadingCurrent: true
  })),
  on(getCurrentDataSuccess, (state, { currentWeather }) => {
    //Save city and current Weather Data on api Call
    const city = currentWeather.name;
    return { ...state, city: city, loadingCurrent: false, currentData: currentWeather };
  }),
  on(getCurrentDataFail, (state) => ({
    ...state,
    loadingCurrent: false
  })),

  on(getFourDaysData, getFourDaysDataByLongitudeLatitude, (state) => ({
    ...state,
    loadingForecast: true
  })),
  on(getFourDaysDataSuccess, (state, { forecast5 }) => {
    //Save city and forecast Weather Data on api Call
    const days = 4;
    const city = forecast5.city.name;

    // Keep the first 4 days (each day has 24/3 = 8 sets of data every 3 hours)
    const forecastData = { ...forecast5, list: forecast5.list.slice(0, days * 8) };
    // Save forecastData to localStorage so we won't call get api again if we try to call it on the same day
    localStorage.setItem('forecast5', JSON.stringify(forecastData));
    localStorage.setItem('timeCalled', JSON.stringify(new Date()));

    return { ...state, city: city, loadingForecast: false, forecastData: forecastData };
  }),
  on(getFourDaysDataFail, (state) => ({
    ...state,
    loadingForecast: false
  })),
  // Save in Store the saved Forecast Weather Data and city we had in Local Storage
  on(saveFourDaysData, (state, { forecastData }) => {
    const city = forecastData.city.name;
    
    return { ...state, city: city, forecastData: forecastData };
  })
);

export function weatherReducer(state: any, action: any) {
  return _weatherReducer(state, action);
}
