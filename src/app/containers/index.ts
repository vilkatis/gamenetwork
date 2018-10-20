import { SessionsComponent } from './sessions/sessions.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { GameComponent } from './game/game.component';

export const containers: any[] = [
  SessionsComponent,
  NewSessionComponent,
  SessionsComponent,
  GameComponent,
  FeedComponent,
  LoginComponent,
  RegisterComponent,
  LandingComponent,
  HomeComponent
];

export * from './sessions/sessions.component';
export * from './new-session/new-session.component';
export * from './feed/feed.component';
export * from './login/login.component';
export * from './register/register.component';
export * from './landing/landing.component';
export * from './home/home.component';
export * from './game/game.component';
