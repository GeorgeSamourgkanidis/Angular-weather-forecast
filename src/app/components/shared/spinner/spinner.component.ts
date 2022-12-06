import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input()
  height = '120';

  @Input()
  width = '120';

  @Input()
  color = '#000';

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
