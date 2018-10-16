import {IAccountState} from '../models/IAccountState';
import * as fromAccount from '../actions/account.actions';
import { IAccount } from '../../models/IAccount';
import { Selector } from '@ngrx/store';

const initialState: IAccountState = {
  entity: null,
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: fromAccount.AccountActions): IAccountState {
  switch (action.type) {
    case (fromAccount.LOGIN_REQUEST):
    case (fromAccount.REGISTER_REQUEST):
      return {
        ...state,
        isLoading: true
      };
      case (fromAccount.LOGIN_SUCCESS):
      case (fromAccount.REGISTER_SUCCESS):
        return {
          ...state,
          entity: action.payload,
          isLoading: false,
          isLoaded: true
        };
    case (fromAccount.LOGIN_FAILURE):
    case (fromAccount.REGISTER_FAILURE):
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
}

export const getAccountEntity: Selector<IAccountState, IAccount> = (state: IAccountState) => state.entity;
export const getAccountLoading: Selector<IAccountState, boolean> = (state: IAccountState) => state.isLoading;
export const getAccountLoaded: Selector<IAccountState, boolean> = (state: IAccountState) => state.isLoaded;
