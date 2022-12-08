export interface WeatherState {
  loadingCurrent: boolean;
  currentData: [];
  loadingForecast: boolean;
  forecastData: [];
}

export const initialState: WeatherState = {
  loadingCurrent: false,
  currentData: [],
  loadingForecast: false,
  forecastData: []
};
