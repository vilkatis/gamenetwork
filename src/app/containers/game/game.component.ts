import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/models/IAppState';
import * as fromStore from '../../store';
import { IGame } from '../../models/IGame';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss']
})

export class GameComponent {
  public game$: Observable<IGame>;

  public constructor(private _store: Store<IAppState>) {
    this.game$ = _store.pipe(select(fromStore.selectCurrentGame));
  }
}
