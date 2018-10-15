import { Component, OnInit } from '@angular/core';
import * as Faker from 'faker';
import { IPost } from '../../models/post.model';
import { IAccount } from '../../models/IAccount';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss']
})

export class FeedComponent implements OnInit {
  public posts: IPost[] = [];
  public user: IAccount;
  public account$: Observable<IAccount>;

  constructor(private _store: Store<AppState>) {
    this.user = {
      username: Faker.internet.userName(),
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      avatar: Faker.internet.avatar()
    };
    for (let i = 0; i < 5; i++) {
      const hasImage = Math.random() >= 0.5;
      const hasText = hasImage ? Math.random() >= 0.5 : true;
      const hasActivity = Math.random() >= 0.5;
      Faker.seed(i);
      const post: IPost = {
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
      this.posts.push(post);
    }
  }

  ngOnInit() {
    this.account$ = this._store.select(fromStore.getAccountEntity);
  }
}
