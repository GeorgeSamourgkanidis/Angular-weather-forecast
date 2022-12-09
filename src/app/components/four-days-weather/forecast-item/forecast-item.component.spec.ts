import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastItemComponent } from './forecast-item.component';

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
