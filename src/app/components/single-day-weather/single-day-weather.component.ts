import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ROUTES_STRINGS } from 'src/app/modules/app-routing.module';
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

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    // By default get Data by gps
    this.handleGetDataByGps();

    this.currentData$ = this.store.select(selectCurrentData);
    this.loadingCurrent$ = this.store.select(selectLoadingCurrent);
  }

  handleGetCityCurrentWeather(cityInput: string) {
    // get Data by city that we got via Emmiter
    this.store.dispatch({ type: WeatherActions.getCurrentData, city: cityInput });
  }

  handleGetDataByGps() {
    // get gps location
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      this.store.dispatch({
        type: WeatherActions.getCurrentDataByLongitudeLatitude,
        longitude: longitude,
        latitude: latitude
      });
    });
  }

  handleNavigateToForecast5() {
    this.router.navigateByUrl(ROUTES_STRINGS.FORECAST5);
  }
}
