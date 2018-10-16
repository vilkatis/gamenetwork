import * as fromInterface from '../actions/interface.actions';
import { Selector } from '@ngrx/store';
import { IInterfaceState } from '../models/IInterfaceState';

const initialState: IInterfaceState = {
  isSettingsOpen: false,
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: fromInterface.InterfaceActions): IInterfaceState {
  switch (action.type) {
    case (fromInterface.OPEN_SETTINGS):
      return {
        ...state,
        isSettingsOpen: true
      };
    case (fromInterface.CLOSE_SETTINGS):
      return {
        ...state,
        isSettingsOpen: false
      };
    default: {
      return state;
    }
  }
}

export const getIsSettingsOpen: Selector<IInterfaceState, boolean> = (state: IInterfaceState) => state.isSettingsOpen;
