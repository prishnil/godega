import * as fromUI from './modules/shared/reducers/ui.reducer';
import * as fromAuth from './modules/auth/reducer/auth.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  ui: fromUI.State;
  auth: fromAuth.State;
}

export const REDUCERS: ActionReducerMap<State> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer,
};

export const GET_UI_STATE = createFeatureSelector<fromUI.State>('ui');
export const GET_IS_LOADING = createSelector(GET_UI_STATE, fromUI.GET_IS_LOADING);

export const GET_AUTH_STATE = createFeatureSelector<fromAuth.State>('auth');
export const GET_IS_AUTH = createSelector(GET_AUTH_STATE, fromAuth.GET_IS_AUTHENTICATED);

