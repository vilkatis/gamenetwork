import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as accountActions from '../actions/account.actions';
import {map, switchMap} from 'rxjs/operators';
import {LoginRequest} from '../../models/login-request.model';

@Injectable()
export class AccountEffects {
  constructor(private _actions$: Actions) {}

  @Effect()
  login$ = this._actions$.ofType(accountActions.LOGIN_REQUEST)
    .pipe(
      map((action: accountActions.LoginRequest) => action.payload),
      map((request: LoginRequest) => new accountActions.LoginSuccess())
    );
}
