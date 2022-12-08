import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { weatherReducer } from './Stores/weather-store/weather.reducers';
import { WeatherEffects } from './Stores/weather-store/weather.effects';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared.module';
import { PipeModule } from './modules/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleDayWeatherComponent } from './components/single-day-weather/single-day-weather.component';
import { FourDaysWeatherComponent } from './components/four-days-weather/four-days-weather.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchCityComponent, SingleDayWeatherComponent, FourDaysWeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PipeModule,
    SharedModule,
    StoreModule.forRoot({ weatherStore: weatherReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([WeatherEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
