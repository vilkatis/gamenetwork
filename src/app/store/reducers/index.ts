import * as fromAccount from './account.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../models/app-state.model';

export const reducers: ActionReducerMap<AppState> = {
  account: fromAccount.reducer
};
