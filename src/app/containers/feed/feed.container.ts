import {Component, OnInit} from '@angular/core';
import * as Faker from 'faker';
import {IPost} from '../../models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.container.html',
  styleUrls: ['feed.container.scss']
})

export class FeedContainer implements OnInit {
  public posts: IPost[] = [];

  constructor() {
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
  }
}
