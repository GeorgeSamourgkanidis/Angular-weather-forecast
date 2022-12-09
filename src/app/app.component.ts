import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ROUTES_STRINGS } from './modules/app-routing.module';
import { WeatherActions } from './Stores/weather-store/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    // If you set the url manually check location and dispatch to get new Data
    switch (window.location.pathname) {
      case `/${ROUTES_STRINGS.CURRENT}`:
        this.store.dispatch({ type: WeatherActions.getCurrentData, city: 'athens' });
        break;
      case `/${ROUTES_STRINGS.FORECAST5}`:
        this.store.dispatch({ type: WeatherActions.getFourDaysData, city: 'athens' });
        break;
      default:
        break;
    }
  }
}
