export interface WeatherState {
  city: string;
  loadingCurrent: boolean;
  currentData: {};
  loadingForecast: boolean;
  forecastData: {};
}

export const initialState: WeatherState = {
  city: '',
  loadingCurrent: false,
  currentData: {},
  loadingForecast: false,
  forecastData: {}
};
