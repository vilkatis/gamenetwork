import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as gamesActions from '../actions/sessions.actions';
import { map } from 'rxjs/operators';
import * as Faker from 'faker';
import { Utils } from '../../classes/utils';
import { ISession } from '../../models/ISession';

@Injectable()
export class SessionsEffects {
  @Effect()
  games$ = this._actions$
    .pipe(
      ofType(gamesActions.GET_SESSIONS_REQUEST),
      map(() => {
        const sessions: ISession[] = [];
        for (let i = 0; i < 5; i++) {
          Faker.seed(i);
          const session: ISession = {
            id: i,
            title: Faker.lorem.words(3),
            date: '12/10/2018',
            time: '24:00',
            platform: Faker.random.arrayElement(['PC', 'XBOX', 'PS4']),
            region: Faker.random.arrayElement(['EU', 'US', 'FR', 'ES', 'IT', 'IL']),
            language: Faker.random.arrayElement(['EN', 'FR', 'ES', 'IT', 'IL']),
            gameName: Faker.random.arrayElement(['PUBG', 'Fortnite', 'CS GO', 'Overwatch', 'Destiny 2']),
            users: []
          };
          for (let j = 0; j < (Faker.random.number(4) + 1); j++) {
            session.users.push({
              avatar: Faker.internet.avatar()
            });
          }
          sessions.push(session);
        }
        return new gamesActions.GetSessionsSuccess(
          Utils.keyBy<ISession>(sessions, 'id')
        );
      })
    );

  constructor(private _actions$: Actions) {
  }
}
