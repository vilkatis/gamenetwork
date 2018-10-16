import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppState } from '../../store/models/IAppState';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { CustomValidators } from '../../classes/custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent {
  public formGroup: FormGroup;

  public constructor(private _store: Store<IAppState>, private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: CustomValidators.MatchPassword
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this._store.dispatch(new fromStore.RegisterRequest(this.formGroup.value));
    }
  }
}
