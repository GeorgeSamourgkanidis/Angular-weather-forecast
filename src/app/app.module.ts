import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
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

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchCityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PipeModule,
    SharedModule,
    StoreModule.forRoot({ weatherStore: weatherReducer }),
    EffectsModule.forRoot([WeatherEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
