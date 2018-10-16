import { ArenaComponent } from './arena/arena.component';
import { FeedComponent } from './feed/feed.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

export const containers: any[] = [
  ArenaComponent,
  FeedComponent,
  GameComponent,
  LoginComponent,
  RegisterComponent,
  LandingComponent,
  HomeComponent
];

export * from './arena/arena.component';
export * from './feed/feed.component';
export * from './game/game.component';
export * from './login/login.component';
export * from './register/register.component';
export * from './landing/landing.component';
export * from './home/home.component';
