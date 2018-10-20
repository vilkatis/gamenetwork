import * as fromAccount from './account.reducer';
import * as fromFeed from './feed.reducer';
import * as fromInterface from './interface.reducer';
import * as fromSessions from './sessions.reducer';
import * as fromGames from './games.reducer';
import * as fromRouter from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../models/IAppState';

export const reducers: ActionReducerMap<IAppState> = {
  account: fromAccount.reducer,
  feed: fromFeed.reducer,
  interface: fromInterface.reducer,
  sessions: fromSessions.reducer,
  games: fromGames.reducer,
  router: fromRouter.routerReducer
};
