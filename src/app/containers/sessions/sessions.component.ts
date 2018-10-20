import { Component } from '@angular/core';
import { ISession } from '../../models/ISession';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/models/IAppState';
import * as fromStore from '../../store';

@Component({
  selector: 'app-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.scss']
})

export class SessionsComponent {
  public games$: Observable<ISession[]>;

  public constructor(private _store: Store<IAppState>) {
    this.games$ = _store.pipe(select(fromStore.getAllSessions));
  }
}
