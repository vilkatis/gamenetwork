import { Action } from '@ngrx/store';
import { IAccount } from '../../models/IAccount';
import { ILoginRequest } from '../../models/ILoginRequest';
import { IRegisterRequest } from '../../models/IRegisterRequest';


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

export const REGISTER_REQUEST = '[ACCOUNT] REGISTER REQUEST';
export const REGISTER_SUCCESS = '[ACCOUNT] REGISTER SUCCESS';
export const REGISTER_FAILURE = '[ACCOUNT] REGISTER FAILURE';

export class RegisterRequest implements Action {
  readonly type = REGISTER_REQUEST;

  constructor(public payload: IRegisterRequest) {
  }
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: IAccount) {
  }
}

export class RegisterFailure implements Action {
  readonly type = REGISTER_FAILURE;
}

export type AccountActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | RegisterRequest
  | RegisterSuccess
  | RegisterFailure;
