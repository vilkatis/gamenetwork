import * as fromAccount from './account.reducer';
import * as fromFeed from './feed.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../models/IAppState';

export const reducers: ActionReducerMap<IAppState> = {
  account: fromAccount.reducer,
  feed: fromFeed.reducer
};
