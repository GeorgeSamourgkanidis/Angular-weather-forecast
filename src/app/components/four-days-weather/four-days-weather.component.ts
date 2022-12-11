import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ROUTES_STRINGS } from 'src/app/modules/app-routing.module';
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

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    let callGetApi = true;

    // Check if we have saved Forecast Data in Local Storage and if it was saved today save data to Store
    if (localStorage.hasOwnProperty('timeCalled') && localStorage.hasOwnProperty('forecast5')) {
      const timeCalled = JSON.parse(localStorage.getItem('timeCalled') || 'null');
      if (this.datesAreOnSameDay(new Date(timeCalled), new Date())) {
        callGetApi = false;

        this.store.dispatch({
          type: WeatherActions.saveFourDaysData,
          forecastData: JSON.parse(localStorage.getItem('forecast5') || 'null')
        });
      }
    }

    // Else Call Get api and save the new Data to local Storage
    if (callGetApi) {
      this.handleGetDataByGps();
    }

    this.forecastData$ = this.store.select(selectForecastData);
    this.loadingForecast$ = this.store.select(selectLoadingForecast);
  }

  handleGetCityForecast(cityInput: string) {
    // get Data by city that we got via Emmiter
    this.store.dispatch({ type: WeatherActions.getFourDaysData, city: cityInput });
  }

  handleGetDataByGps() {
    // get gps location
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;

      this.store.dispatch({
        type: WeatherActions.getFourDaysDataByLongitudeLatitude,
        longitude: longitude,
        latitude: latitude
      });
    });
  }

  handleDayClicked(dayData: any[]) {
    // Show day clicked Details
    this.showDayDetails = true;
    this.dayDetails = dayData;
  }

  handleReturn() {
    this.showDayDetails = false;
    this.dayDetails = [];
  }

  handleNavigateToCurrentWeather() {
    this.router.navigateByUrl(ROUTES_STRINGS.CURRENT);
  }

  datesAreOnSameDay(first: Date, second: Date) {
    // Check if dates are on the same Day
    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
    );
  }
}
