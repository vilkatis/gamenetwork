import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../models/IAppState';

export const selectRouterState =
  createFeatureSelector<IAppState, RouterReducerState>('router');

export const selectRouteParameters = createSelector(
  selectRouterState,
  router => router.state.root.firstChild.params
);
