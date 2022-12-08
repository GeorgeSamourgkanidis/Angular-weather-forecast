import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherActions } from 'src/app/Stores/weather-store/weather.actions';
import { selectLoadingCurrent } from 'src/app/Stores/weather-store/weather.selectors';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {
  searchControl = new FormControl();
  loadingCurrent: Observable<boolean>;
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadingCurrent = this.store.select(selectLoadingCurrent);
  }

  handleRequestWheatherData() {
    this.store.dispatch({ type: WeatherActions.getCurrentData, city: this.searchControl.value });
  }
}
