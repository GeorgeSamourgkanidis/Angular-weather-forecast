import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherActions } from 'src/app/Stores/weather-store/weather.actions';
import { selectForecastData, selectLoadingForecast } from 'src/app/Stores/weather-store/weather.selectors';

@Component({
  selector: 'app-four-days-weather',
  templateUrl: './four-days-weather.component.html',
  styleUrls: ['./four-days-weather.component.scss']
})
export class FourDaysWeatherComponent implements OnInit {
  forecastData$: Observable<any>;
  loadingForecast$: Observable<boolean>;

  showDayDetails = false;
  dayDetails: any[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.forecastData$ = this.store.select(selectForecastData);
    this.loadingForecast$ = this.store.select(selectLoadingForecast);
  }

  handleGetCityForecast(cityInput: string) {
    this.store.dispatch({ type: WeatherActions.getFourDaysData, city: cityInput });
  }

  handleDayClicked(dayData: any[]) {
    this.showDayDetails = true;
    this.dayDetails = dayData;
  }

  handleReturn() {
    this.showDayDetails = false;
    this.dayDetails = [];
  }
}
