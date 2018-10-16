import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  public static MatchPassword(_abstractControl: AbstractControl) {
    const password: string = _abstractControl.get('password').value;
    const confirmPassword: string = _abstractControl.get('confirmPassword').value;
    if (password !== confirmPassword) {
      _abstractControl.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
