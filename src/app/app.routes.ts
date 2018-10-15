import {Routes} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {RegisterComponent} from './containers/register/register.component';
import {FeedComponent} from './containers/feed/feed.component';
import {GameComponent} from './containers/game/game.component';
import {ArenaComponent} from './containers/arena/arena.component';

import { AccountGuard } from './guards';

export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'feed',
    canActivate: [AccountGuard],
    component: FeedComponent,
  },
  {path: 'arena', component: ArenaComponent},
  {path: 'link2', component: FeedComponent},
  {path: 'link3', component: FeedComponent},
  {path: 'link4', component: FeedComponent},
];
