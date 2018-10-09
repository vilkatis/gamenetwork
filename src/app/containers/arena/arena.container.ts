import {Component, OnInit} from '@angular/core';
import * as Faker from 'faker';
import {IPost} from '../../models/post.model';
import {IGame} from '../../models/game.model';

@Component({
  selector: 'app-arena',
  templateUrl: 'arena.container.html',
  styleUrls: ['arena.container.scss']
})

export class ArenaContainer implements OnInit {
  public games: IGame[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      Faker.seed(i);
      const game: IGame = {
        platform: Faker.random.arrayElement(['PC', 'XBOX', 'PS4']),
        region: Faker.random.arrayElement(['EU', 'US', 'FR', 'ES', 'IT', 'IL']),
        language: Faker.random.arrayElement(['EN', 'FR', 'ES', 'IT', 'IL']),
        title: Faker.lorem.words(3),
        gameName: Faker.random.arrayElement(['PUBG','Fortnite', 'CS GO', 'Overwatch', 'Destiny 2']),
        users: []
      };
      for (let j = 0; j < Faker.random.number(5); j++) {
        game.users.push({
          avatar: Faker.internet.avatar()
        });
      }
      this.games.push(game);
    }
  }

  ngOnInit() {
  }
}
