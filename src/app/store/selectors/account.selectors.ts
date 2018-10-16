import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IAccountState } from '../models/IAccountState';
import * as fromAccount from '../reducers/account.reducer';
import { IAccount } from '../../models/IAccount';
import { IAppState } from '../models/IAppState';

export const getAccountState: MemoizedSelector<IAppState, IAccountState> = createFeatureSelector<IAppState, IAccountState>('account');

export const getAccountEntity: MemoizedSelector<IAppState, IAccount> = createSelector(
  getAccountState,
  fromAccount.getAccountEntity
);

export const getAccountLoaded: MemoizedSelector<IAppState, boolean> = createSelector(
  getAccountState,
  fromAccount.getAccountLoaded
);

export const getAccountLoading: MemoizedSelector<IAppState, boolean> = createSelector(
  getAccountState,
  fromAccount.getAccountLoading
);
