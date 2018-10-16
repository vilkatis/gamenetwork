import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as accountActions from '../actions/account.actions';
import * as feedActions from '../actions/feed.actions';
import { map, switchMap } from 'rxjs/operators';
import { ILoginRequest } from '../../models/ILoginRequest';
import * as Faker from 'faker';
import { Router } from '@angular/router';
import { IRegisterRequest } from '../../models/IRegisterRequest';

@Injectable()
export class AccountEffects {
  @Effect()
  login$ = this._actions$
    .pipe(
      ofType(accountActions.LOGIN_REQUEST),
      map((action: accountActions.LoginRequest) => action.payload),
      switchMap((request: ILoginRequest) => {
        Faker.seed(1000);
        this._router.navigateByUrl('account/feed');
        return [
          new feedActions.FeedRequest(),
          new accountActions.LoginSuccess(
            {
              username: request.username,
              firstName: Faker.name.firstName(),
              lastName: Faker.name.lastName(),
              avatar: Faker.internet.avatar()
            }
          )
        ];
      })
    );

  @Effect()
  register$ = this._actions$
    .pipe(
      ofType(accountActions.REGISTER_REQUEST),
      map((action: accountActions.RegisterRequest) => action.payload),
      switchMap((request: IRegisterRequest) => {
        Faker.seed(1000);
        this._router.navigateByUrl('account/feed');
        return [
          new feedActions.FeedRequest(),
          new accountActions.RegisterSuccess(
            {
              username: request.username,
              firstName: Faker.name.firstName(),
              lastName: Faker.name.lastName(),
              avatar: Faker.internet.avatar()
            }
          )
        ];
      })
    );

  constructor(private _actions$: Actions, private _router: Router) {
  }
}
