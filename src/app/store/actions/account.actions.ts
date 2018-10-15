import {Action} from '@ngrx/store';
import {Utils} from '../../classes/utils';
import {IAccount} from '../../models/IAccount';
import {ILoginRequest} from '../../models/ILoginRequest';


export const LOGIN_REQUEST = Utils.type('[ACCOUNT] LOGIN REQUEST');
export const LOGIN_SUCCESS = Utils.type('[ACCOUNT] LOGIN SUCCESS');
export const LOGIN_FAILURE = Utils.type('[ACCOUNT] LOGIN FAILURE');

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

  // TODO Maybe can be removed
  constructor(public payload: any) {}
}

export type AccountActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure;
