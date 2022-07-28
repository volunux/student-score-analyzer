import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, filter, first, map, switchMap, take } from 'rxjs/operators';
import { StudentServiceImpl } from '../../domain/student/service/student-service-impl';

export class VerifyEmailService {

   public static getValidator(service: StudentServiceImpl): AsyncValidatorFn {
      
      return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

            if (!control.dirty) return of(null);

            let entry: string = control.value;
            let $result = { 'existing': { 'value': entry } }
            let lastInput: string | null = null;
            return control.valueChanges.pipe(
               filter((emailAddress: string) => { return emailAddress != lastInput }),
               take(1),
               delay(3000),
               switchMap((emailAddress: string) => {
                  lastInput = emailAddress;
                  return service.checkEmailAddress(entry);
               }),
               map((exists: boolean) => {
                  return !exists ? null : $result
               }),
               first(),
               catchError((error) => { return of($result); })
            );
      }
   }
}

