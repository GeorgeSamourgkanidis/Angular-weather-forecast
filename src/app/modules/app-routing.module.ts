import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourDaysWeatherComponent } from '../components/four-days-weather/four-days-weather.component';
import { SingleDayWeatherComponent } from '../components/single-day-weather/single-day-weather.component';

export const enum ROUTES_STRINGS {
  CURRENT = 'current',
  FORECAST5 = 'forecast5'
}

const routes: Routes = [
  {
    path: `${ROUTES_STRINGS.CURRENT}`,
    component: SingleDayWeatherComponent
  },
  {
    path: `${ROUTES_STRINGS.FORECAST5}`,
    component: FourDaysWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
