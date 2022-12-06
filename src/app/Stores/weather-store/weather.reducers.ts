import { createReducer, on } from '@ngrx/store';
import {} from './weather.actions';
import { initialState } from './weather.state';

const _weatherReducer = createReducer(initialState);

export function weatherReducer(state: any, action: any) {
  return _weatherReducer(state, action);
}
