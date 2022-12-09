import { WeatherState } from './weather.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const weatherState = createFeatureSelector<WeatherState>('weatherStore');

export const selectCity = createSelector(weatherState, (state) => state.city);

export const selectLoadingCurrent = createSelector(weatherState, (state) => state.loadingCurrent);
export const selectCurrentData= createSelector(weatherState, (state) => state.currentData);

export const selectLoadingForecast = createSelector(weatherState, (state) => state.loadingForecast);
export const selectForecastData= createSelector(weatherState, (state) => state.forecastData);

