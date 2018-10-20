import { Action } from '@ngrx/store';
import { ISession } from '../../models/ISession';

export const GET_SESSIONS_REQUEST = '[ACCOUNT] GET SESSIONS REQUEST';
export const GET_SESSIONS_SUCCESS = '[ACCOUNT] GET SESSIONS SUCCESS';
export const GET_SESSIONS_FAILURE = '[ACCOUNT] GET SESSIONS FAILURE';

export class GetSessionsRequest implements Action {
  readonly type = GET_SESSIONS_REQUEST;
}

export class GetSessionsSuccess implements Action {
  readonly type = GET_SESSIONS_SUCCESS;

  constructor(public payload: Record<string, ISession>) {
  }
}

export class GetSessionsFailure implements Action {
  readonly type = GET_SESSIONS_FAILURE;
}

export const ADD_SESSION = '[ACCOUNT] ADD SESSION';

export class AddSession implements Action {
  readonly type = ADD_SESSION;

  constructor(public payload: ISession) {
  }
}

export type SessionsActions =
  | GetSessionsRequest
  | GetSessionsSuccess
  | GetSessionsFailure
  | AddSession;
