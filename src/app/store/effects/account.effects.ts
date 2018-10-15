import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as accountActions from '../actions/account.actions';
import {map, switchMap} from 'rxjs/operators';
import {ILoginRequest} from '../../models/ILoginRequest';
import * as Faker from 'faker';

@Injectable()
export class AccountEffects {
  constructor(private _actions$: Actions) {
  }

  @Effect()
  login$ = this._actions$.ofType(accountActions.LOGIN_REQUEST)
    .pipe(
      map((action: accountActions.LoginRequest) => action.payload),
      map((request: ILoginRequest) => {
        Faker.seed(1000);
        return new accountActions.LoginSuccess(
          {
            username: request.username,
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            avatar: Faker.internet.avatar()
          }
        );
      })
    );
}
