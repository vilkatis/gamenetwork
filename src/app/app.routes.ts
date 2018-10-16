import { Routes } from '@angular/router';
import { ArenaComponent, FeedComponent, HomeComponent, LandingComponent, LoginComponent, RegisterComponent } from './containers';

import { AccountGuard } from './guards';

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
      {path: 'arena', component: ArenaComponent},
      {path: 'link2', component: FeedComponent},
      {path: 'link3', component: FeedComponent},
      {path: 'link4', component: FeedComponent},
      {path: 'feed', component: FeedComponent}
    ]
  }
];
