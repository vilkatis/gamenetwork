import { Component } from '@angular/core';
import { IPost } from '../../models/IPost';
import { IAccount } from '../../models/IAccount';
import * as fromStore from '../../store';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/models/IAppState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss']
})

export class FeedComponent {
  public feed$: Observable<IPost[]>;
  public account$: Observable<IAccount>;

  public constructor(private _store: Store<IAppState>) {
    this.account$ = _store.pipe(select(fromStore.getAccountEntity));
    this.feed$ = _store.pipe(select(fromStore.getAllFeed));
  }
}
