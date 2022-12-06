import { createAction, props } from '@ngrx/store';

export const enum ActionTypes {
  saveCurrentData = 'Save current weather data'
}
export const saveModelFilters = createAction(
  ActionTypes.saveCurrentData,
  props<{
    data: [];
  }>()
);
