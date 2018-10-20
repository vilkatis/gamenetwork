import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromGames from '../reducers/games.reducer';
import { IAppState } from '../models/IAppState';
import { IGamesState } from '../models/IGamesState';
import { IGame } from '../../models/IGame';

export const getGamesState: MemoizedSelector<IAppState, IGamesState> = createFeatureSelector<IAppState, IGamesState>('games');

export const getGameEntities: MemoizedSelector<IAppState, Record<string, IGame>> = createSelector(
  getGamesState,
  fromGames.getGameEntities
);
