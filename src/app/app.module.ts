import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effects, reducers } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromGuards from './guards';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule, MatToolbarModule
} from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';

export const META_REDUCERS: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatSlideToggleModule,
    IonRangeSliderModule,
    NgxMaterialTimepickerModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot(reducers, {metaReducers: META_REDUCERS}),
    StoreRouterConnectingModule.forRoot(),
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
