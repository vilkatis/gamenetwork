import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginContainer} from './containers/login/login.container';
import {InputComponent} from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {RegisterContainer} from './containers/register/register.container';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {StrikeComponent} from './components/strike/strike.component';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { reducers } from './store';
import {FeedContainer} from './containers/feed/feed.container';
import {FooterComponent} from './components/footer/footer.component';
import {GameContainer} from './containers/game/game.container';
import {FeedItemComponent} from './components/feed-item/feed-item.component';
import {ArenaContainer} from './containers/arena/arena.container';
import {ArenaItemComponent} from './components/arena-item/arena-item.component';
import { HeaderComponent } from './components/header/header.component';

export const META_REDUCERS: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [
    AppComponent,
    LoginContainer,
    RegisterContainer,
    ArenaContainer,
    FeedContainer,
    GameContainer,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    StrikeComponent,
    FooterComponent,
    FeedItemComponent,
    ArenaItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot(reducers, {metaReducers: META_REDUCERS}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
