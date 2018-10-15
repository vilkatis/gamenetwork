import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';
import { Observable, of } from 'rxjs';
import { State } from '../store/models/state.model';

@Injectable()
export class AccountGuard implements CanActivate {
  constructor(private store: Store<State>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap((value) => of(value)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAccountLoaded).pipe(
      take(1)
    );
  }
}
