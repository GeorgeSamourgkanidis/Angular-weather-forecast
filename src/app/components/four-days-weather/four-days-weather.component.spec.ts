import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourDaysWeatherComponent } from './four-days-weather.component';

describe('FourDaysWeatherComponent', () => {
  let component: FourDaysWeatherComponent;
  let fixture: ComponentFixture<FourDaysWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourDaysWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourDaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
