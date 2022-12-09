import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, throwError } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GetWeatherService } from 'src/app/data/apis/weather/get-weather.service';
import { NotifyService } from 'src/app/utils/services/notification.service';
import { WeatherActions } from './weather.actions';

@Injectable()
export class WeatherEffects {
  getCurrentData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherActions.getCurrentData),
      mergeMap((payload) =>
        this.getWeatherService.getCurrentWeatherByCity(payload['city']).pipe(
          map((response) => {
            return { type: WeatherActions.getCurrentDataSuccess, currentWeather: response };
          }),
          catchError((err) => {
            this.notifyService.openErrorSwal(err.error.message);
            return of({
              type: WeatherActions.getCurrentDataFail,
              error: err
            });
          })
        )
      )
    );
  });

  getCurrentDataByLongitudeLatitude$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherActions.getCurrentDataByLongitudeLatitude),
      mergeMap((payload) =>
        this.getWeatherService.getCurrentWeatherByLongitudeLatitude(payload['longitude'], payload['latitude']).pipe(
          map((response) => {
            return { type: WeatherActions.getCurrentDataSuccess, currentWeather: response };
          }),
          catchError((err) => {
            this.notifyService.openErrorSwal(err.error.message);
            return of({
              type: WeatherActions.getCurrentDataFail,
              error: err
            });
          })
        )
      )
    );
  });

  getFourDaysData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherActions.getFourDaysData),
      mergeMap((payload) =>
        this.getWeatherService.getForecast5DataWeatherByCity(payload['city']).pipe(
          map((response) => {
            return { type: WeatherActions.getFourDaysDataSuccess, forecast5: response };
          }),
          catchError((err) => {
            this.notifyService.openErrorSwal(err.error.message);
            return of({
              type: WeatherActions.getFourDaysDataFail,
              error: err
            });
          })
        )
      )
    );
  });

  getFourDaysDataByLongitudeLatitude$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherActions.getFourDaysDataByLongitudeLatitude),
      mergeMap((payload) =>
        this.getWeatherService
          .getForecast5DataWeatherByLongitudeLatitude(payload['longitude'], payload['latitude'])
          .pipe(
            map((response) => {
              return { type: WeatherActions.getFourDaysDataSuccess, forecast5: response };
            }),
            catchError((err) => {
              this.notifyService.openErrorSwal(err.error.message);
              return of({
                type: WeatherActions.getCurrentDataFail,
                error: err
              });
            })
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private getWeatherService: GetWeatherService,
    private notifyService: NotifyService
  ) {}
}
