import {Routes} from '@angular/router';
import {LoginContainer} from './containers/login/login.container';
import {RegisterContainer} from './containers/register/register.container';
import {FeedContainer} from './containers/feed/feed.container';
import {GameContainer} from './containers/game/game.container';
import {ArenaContainer} from './containers/arena/arena.container';

export const ROUTES: Routes = [
  {path: '', component: FeedContainer},
  {path: 'login', component: LoginContainer},
  {path: 'register', component: RegisterContainer},
  {path: 'feed', component: FeedContainer},
  {path: 'arena', component: ArenaContainer},
  {path: 'link2', component: FeedContainer},
  {path: 'link3', component: FeedContainer},
  {path: 'link4', component: FeedContainer},
];
