import { createAction, props } from '@ngrx/store';
import { CurrentWeather } from 'src/app/data/interfaces/CurrentWeather';
import { Forecast5Weather } from 'src/app/data/interfaces/Forecast5Weather';

export const enum WeatherActions {
  getCurrentData = 'Get current weather data',
  getCurrentDataSuccess = 'Get current weather data Success',
  getCurrentDataFail = 'Get current weather data Fail',

  getFourDaysData = 'Get forecast5 weather data',
  getFourDaysDataSuccess = 'Get forecast5 weather data Success',
  getFourDaysDataFail = 'Get forecast5 weather data Fail',
  
}
export const getCurrentData = createAction(WeatherActions.getCurrentData, props<{ city: string }>());
export const getCurrentDataSuccess = createAction(WeatherActions.getCurrentDataSuccess, props<{ currentWeather: CurrentWeather }>());
export const getCurrentDataFail = createAction(WeatherActions.getCurrentDataFail);

export const getFourDaysData = createAction(WeatherActions.getFourDaysData, props<{ city: string }>());
export const getFourDaysDataSuccess = createAction(WeatherActions.getFourDaysDataSuccess, props<{ forecast5: Forecast5Weather }>());
export const getFourDaysDataFail = createAction(WeatherActions.getFourDaysDataFail);
