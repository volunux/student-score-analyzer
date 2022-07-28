import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function emailAddressPattern(emailAddress: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email: boolean = emailAddress.test(control.value);
    return !email ? { 'pattern': { 'value': control.value } } : null;
  }
}

export function subjectCodePattern(subjectCode: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email: boolean = subjectCode.test(control.value);
    return !email ? { 'pattern': { 'value': control.value } } : null;
  }
}


export function isNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let entry: number = +control.value;
    return !Number.isInteger(entry) ? { 'type': { 'value': entry } } : null;
  }
}
