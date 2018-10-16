import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { IAppState } from '../../store/models/IAppState';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class HomeComponent {
  public isSettingsOpen$: Observable<boolean>;

  public constructor(private _store: Store<IAppState>) {
    this.isSettingsOpen$ = _store.pipe(select(fromStore.getIsSettingsOpen));
  }
}
