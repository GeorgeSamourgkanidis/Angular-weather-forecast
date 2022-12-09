import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherActions } from 'src/app/Stores/weather-store/weather.actions';
import { selectCurrentData, selectLoadingCurrent } from 'src/app/Stores/weather-store/weather.selectors';

@Component({
  selector: 'app-single-day-weather',
  templateUrl: './single-day-weather.component.html',
  styleUrls: ['./single-day-weather.component.scss']
})
export class SingleDayWeatherComponent implements OnInit {
  currentData$: Observable<any>;
  loadingCurrent$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentData$ = this.store.select(selectCurrentData);
    this.loadingCurrent$ = this.store.select(selectLoadingCurrent);
  }

  handleGetCityCurrentWeather(cityInput: string) {
    this.store.dispatch({ type: WeatherActions.getCurrentData, city: cityInput });
  }
}
