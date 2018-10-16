import { Action } from '@ngrx/store';
import { IAccount } from '../../models/IAccount';
import { ILoginRequest } from '../../models/ILoginRequest';


export const LOGIN_REQUEST = '[ACCOUNT] LOGIN REQUEST';
export const LOGIN_SUCCESS = '[ACCOUNT] LOGIN SUCCESS';
export const LOGIN_FAILURE = '[ACCOUNT] LOGIN FAILURE';

export class LoginRequest implements Action {
  readonly type = LOGIN_REQUEST;

  constructor(public payload: ILoginRequest) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: IAccount) {
  }
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
}


export type AccountActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure;
