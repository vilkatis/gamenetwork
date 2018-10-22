import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { IAppState } from '../../store/models/IAppState';
import { Observable } from 'rxjs';
import { IAccount } from '../../models/IAccount';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss']
})

export class ChatComponent {
  public account$: Observable<IAccount>;

  public constructor(private _store: Store<IAppState>) {
    this.account$ = _store.pipe(select(fromStore.getAccountEntity));
  }
}
