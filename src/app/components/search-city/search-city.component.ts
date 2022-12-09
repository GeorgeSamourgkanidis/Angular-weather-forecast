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

  searchControl = new FormControl();
  city$: Subscription;
  cityShown: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // handling subscriptions
    this.city$ = this.store.select(selectCity).subscribe((city) => (this.cityShown = city));
  }

  ngOnDestroy(): void {
    this.city$.unsubscribe();
  }

  handleRequestWheatherData() {
    // only search city data if its different
    if (this.searchControl.value !== this.cityShown) {
      this.searchCityEmitter.emit(this.searchControl.value);
    }
  }
}
