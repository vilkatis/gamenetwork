import { Component } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { IAppState } from '../../store/models/IAppState';

@Component({
  selector: ' app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {
  public formGroup: FormGroup;

  public constructor(private _store: Store<IAppState>, private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this._store.dispatch(new fromStore.LoginRequest(this.formGroup.value));
    }
  }
}
