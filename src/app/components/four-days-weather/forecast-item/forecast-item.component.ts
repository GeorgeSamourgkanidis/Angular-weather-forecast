import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {
  @Input()
  data: any[];

  @Output()
  dayClickedEmitter: EventEmitter<any[]> = new EventEmitter();

  @Input()
  date: number;
  @Input()
  dateFormat: string;
  @Input()
  icon: string;
  @Input()
  minTemp: number;
  @Input()
  maxTemp: number;

  ngOnInit(): void {
    // if data was passed (all days tab) find min max
    if (this.data) {
      // Initialize first min max
      this.minTemp = this.data[0].main.temp_min;
      this.maxTemp = this.data[0].main.temp_max;
      this.data.forEach((time, index) => {
        if (index !== 0) {
          if (this.minTemp > time.main.temp_min) this.minTemp = time.main.temp_min;
          if (this.maxTemp < time.main.temp_max) this.maxTemp = time.main.temp_max;
        }
      });
    }
  }

  handleDayClicked() {
    // Call parent function to show day Details (clickable only on details tab)
    this.dayClickedEmitter.emit(this.data);
  }
}
