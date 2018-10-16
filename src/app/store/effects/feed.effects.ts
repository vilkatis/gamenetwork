import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as feedActions from '../actions/feed.actions';
import { map } from 'rxjs/operators';
import * as Faker from 'faker';
import { IPost } from '../../models/post.model';
import { Utils } from '../../classes/utils';

@Injectable()
export class FeedEffects {
  @Effect()
  feed$ = this._actions$
    .pipe(
      ofType(feedActions.FEED_REQUEST),
      map(() => {
        const posts: IPost[] = [];
        for (let i = 0; i < 5; i++) {
          const hasImage = Math.random() >= 0.5;
          const hasText = hasImage ? Math.random() >= 0.5 : true;
          const hasActivity = Math.random() >= 0.5;
          Faker.seed(i);
          const post: IPost = {
            id: i,
            user: {
              username: Faker.internet.userName(),
              avatar: Faker.internet.avatar()
            },
            activity: hasActivity ? {
              action: 'is playing',
              name: Faker.lorem.word()
            } : null,
            text: hasText ? Faker.lorem.paragraph() : null,
            image: hasImage ? `https://picsum.photos/600/300?image=${Faker.random.number(100)}` : null
          };
          posts.push(post);
        }
        return new feedActions.FeedSuccess(
          Utils.keyBy<IPost>(posts, 'id')
        );
      })
    );

  constructor(private _actions$: Actions) {
  }
}
