import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AccountState} from '../models/account-state.model';
import * as fromAccount from '../reducers/account.reducer';

export const getAccountState = createFeatureSelector<AccountState>('account');

export const getAccountEntity = createSelector(
  getAccountState,
  fromAccount.getAccountEntity
);

export const getAccountLoaded = createSelector(
  getAccountState,
  fromAccount.getAccountLoaded
);

export const getAccountLoading = createSelector(
  getAccountState,
  fromAccount.getAccountLoading
);
