import * as fromSessions from '../actions/sessions.actions';
import { Selector } from '@ngrx/store';
import { ISessionsState } from '../models/ISessionsState';
import { ISession } from '../../models/ISession';

const initialState: ISessionsState = {
  entities: null,
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: fromSessions.SessionsActions): ISessionsState {
  switch (action.type) {
    case (fromSessions.GET_SESSIONS_REQUEST):
      return {
        ...state,
        isLoading: true
      };
    case (fromSessions.GET_SESSIONS_SUCCESS):
      return {
        ...state,
        entities: action.payload,
        isLoading: false,
        isLoaded: true
      };
    case (fromSessions.GET_SESSIONS_FAILURE):
      return {
        ...state,
        isLoading: false
      };
    case (fromSessions.ADD_SESSION):
      return {
        ...state,
        entities: {
          ...state.entities,
          [Object.keys(state.entities).length + 1]: {
            id: Object.keys(state.entities).length + 1,
            ...action.payload
          }
        }
      };
    default: {
      return state;
    }
  }
}

export const getSessionEntities: Selector<ISessionsState, Record<string, ISession>> = (state: ISessionsState) => state.entities;
export const getSessionsLoading: Selector<ISessionsState, boolean> = (state: ISessionsState) => state.isLoading;
export const getSessionsLoaded: Selector<ISessionsState, boolean> = (state: ISessionsState) => state.isLoaded;
