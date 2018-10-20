import { Routes } from '@angular/router';
import {
  SessionsComponent,
  FeedComponent,
  HomeComponent,
  LandingComponent,
  LoginComponent,
  RegisterComponent,
  GameComponent
} from './containers';

import { AccountGuard } from './guards';
import { NewSessionComponent } from './containers/new-session/new-session.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: 'account',
    component: HomeComponent,
    canActivateChild: [AccountGuard],
    children: [
      {path: '', component: FeedComponent},
      {path: 'feed', component: FeedComponent},
      {path: 'sessions', component: SessionsComponent},
      {path: 'new-session', component: NewSessionComponent},
      {path: 'game/:id', component: GameComponent},
      {path: 'link4', component: FeedComponent}
    ]
  }
];
