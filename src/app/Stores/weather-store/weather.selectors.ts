import { WeatherState } from './weather.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const weatherState = createFeatureSelector<WeatherState>('weatherStore');

export const selectLoadingCurrent = createSelector(weatherState, (state) => state.loadingCurrent);

export const selectLoadingForecast = createSelector(weatherState, (state) => state.loadingForecast);


