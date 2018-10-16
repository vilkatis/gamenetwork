import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { catchError, switchMap, take } from 'rxjs/operators';

import * as fromStore from '../store';
import { Observable, of } from 'rxjs';
import { IAppState } from '../store/models/IAppState';

@Injectable()
export class AccountGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<IAppState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap((value) => of(value)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getAccountLoaded),
      take(1)
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap((value) => of(value)),
      catchError(() => of(false))
    );
  }
}
