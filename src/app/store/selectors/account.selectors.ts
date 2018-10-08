import {createFeatureSelector} from '@ngrx/store';
import {AccountState} from '../models/account-state.model';

export const getAccountState = createFeatureSelector<AccountState>('account');
