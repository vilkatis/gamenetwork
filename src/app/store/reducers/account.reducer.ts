import {AccountState} from '../models/account-state.model';
import {AccountActions} from '../actions/account.actions';

const initialState: AccountState = {
  entity: null,
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: AccountActions): AccountState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

