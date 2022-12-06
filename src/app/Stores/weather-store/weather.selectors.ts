import { WeatherState } from './weather.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const weatherState = createFeatureSelector<WeatherState>('store');


