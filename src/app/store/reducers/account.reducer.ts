import {AccountState} from '../models/account-state.model';
import * as fromAccount from '../actions/account.actions';

const initialState: AccountState = {
  entity: null,
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: fromAccount.AccountActions): AccountState {
  switch (action.type) {
    case (fromAccount.LOGIN_REQUEST):
      return {
        ...state,
        isLoading: true
      };
      case (fromAccount.LOGIN_SUCCESS):
        return {
          ...state,
          entity: action.payload,
          isLoading: false,
          isLoaded: true
        };
    case (fromAccount.LOGIN_FAILURE):
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
}

export const getAccountEntity = (state: AccountState) => state.entity;
export const getAccountLoading = (state: AccountState) => state.isLoading;
export const getAccountLoaded = (state: AccountState) => state.isLoaded;
