import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  constructor(private httpClient: HttpClient) {}

  public getCurrentWeatherByCity(city: string) {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${environment['openWeatherApiKey']}`
    );
  }

  public getCurrentWeatherByLongitudeLatitude(longitude: number, latitude: number) {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${environment['openWeatherApiKey']}`
    );
  }

  public getForecast5DataWeatherByCity(city: string) {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${environment['openWeatherApiKey']}`
    );
  }
  public getForecast5DataWeatherByLongitudeLatitude(longitude: number, latitude: number) {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${environment['openWeatherApiKey']}`
    );
  }
}
