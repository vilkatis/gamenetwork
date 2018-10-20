import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromGames from '../reducers/sessions.reducer';
import { IAppState } from '../models/IAppState';
import { ISessionsState } from '../models/ISessionsState';
import { ISession } from '../../models/ISession';

export const getSessionsState: MemoizedSelector<IAppState, ISessionsState> = createFeatureSelector<IAppState, ISessionsState>('sessions');

export const getSessionEntities: MemoizedSelector<IAppState, Record<string, ISession>> = createSelector(
  getSessionsState,
  fromGames.getGameEntities
);

export const getAllSessions: MemoizedSelector<IAppState, ISession[]> = createSelector(
  getSessionEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getSessionsLoaded: MemoizedSelector<IAppState, boolean> = createSelector(
  getSessionsState,
  fromGames.getGamesLoaded
);

export const getSessionsLoading: MemoizedSelector<IAppState, boolean> = createSelector(
  getSessionsState,
  fromGames.getGamesLoading
);
