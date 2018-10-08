import {Action} from '@ngrx/store';
import {Utils} from '../../classes/utils';


export const LOGIN_REQUEST = Utils.type('[ACCOUNT] LOGIN REQUEST');
export const LOGIN_SUCCESS = Utils.type('[ACCOUNT] LOGIN SUCCESS');
export const LOGIN_FAILURE = Utils.type('[ACCOUNT] LOGIN FAILURE');

export class LoginRequest implements Action {
  readonly type = LOGIN_REQUEST;

  constructor(public payload: LoginRequest) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
}

export type AccountActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure;
