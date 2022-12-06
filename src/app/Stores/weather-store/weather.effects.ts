import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, throwError } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ActionTypes } from './weather.actions';


@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions) {}
}
