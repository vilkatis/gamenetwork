import { Component, Input } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/models/IAppState';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public title: string;

  public constructor(private _store: Store<IAppState>) {
  }

  public onClick() {
    this._store.dispatch(new fromStore.OpenSettings());
  }
}
