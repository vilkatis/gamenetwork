import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppState } from '../../store/models/IAppState';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { IAccount } from '../../models/IAccount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-session.component.html',
  styleUrls: ['new-session.component.scss']
})

export class NewSessionComponent {
  public formGroup: FormGroup;
  public account$: Observable<IAccount>;

  public constructor(private _router: Router, private _store: Store<IAppState>, private _fb: FormBuilder) {
    this.account$ = _store.pipe(select(fromStore.getAccountEntity));
    this.formGroup = this._fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      platform: ['', Validators.required],
      language: ['', Validators.required],
      region: ['', Validators.required],
      gameName: ['', Validators.required],
      users: [[], Validators.required],
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this._store.dispatch(new fromStore.AddSession(this.formGroup.value));
      this._router.navigate(['/account/sessions']);
    }
  }
}
