import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCity } from 'src/app/Stores/weather-store/weather.selectors';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit, OnDestroy {
  @Output()
  searchCityEmitter: EventEmitter<string> = new EventEmitter();

  @Output()
  gpsClicked: EventEmitter<void> = new EventEmitter();

  searchControl = new FormControl();
  citySubscription$: Subscription;
  cityShown: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // handling subscriptions
    this.citySubscription$ = this.store.select(selectCity).subscribe((city) => {
      // every time we call get data Api update shown city and the input formcontrol value
      this.cityShown = city;
      this.searchControl.patchValue(city);
    });
  }

  ngOnDestroy(): void {
    this.citySubscription$.unsubscribe();
  }

  handleRequestWheatherData() {
    // only search city data if input is different than shown city
    if (this.searchControl.value !== this.cityShown) {
      this.searchCityEmitter.emit(this.searchControl.value);
    }
  }

  handleGpsClicked() {
    this.gpsClicked.emit();
  }
}
