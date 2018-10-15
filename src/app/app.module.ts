import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RegisterComponent } from './containers/register/register.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { StrikeComponent } from './components/strike/strike.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FeedComponent } from './containers/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameComponent } from './containers/game/game.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { ArenaComponent } from './containers/arena/arena.component';
import { ArenaItemComponent } from './components/arena-item/arena-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedNewComponent } from './components/feed-new/feed-new.component';
import { effects, reducers } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromGuards from './guards';
import * as fromComponents from './components';
import * as fromContainers from './containers';

export const META_REDUCERS: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot(reducers, {metaReducers: META_REDUCERS}),
    EffectsModule.forRoot(effects),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [...fromGuards.guards],
  declarations: [
    AppComponent,
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
