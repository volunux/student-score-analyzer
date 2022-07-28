import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, filter, first, map, switchMap, take } from 'rxjs/operators';
import { SubjectServiceImpl } from '../../domain/subject/service/subject-service-impl';

export class VerifySubjectCodeService {

  public static getValidator(service: SubjectServiceImpl): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

      if (!control.dirty) return of(null);

      let entry: string = control.value;
      let $result = { 'existing': { 'value': entry } }
      let lastInput: string | null = null;
      return control.valueChanges.pipe(
        filter((subjectCode: string) => { return subjectCode != lastInput }),
        take(1),
        delay(3000),
        switchMap((subjectCode: string) => {
          lastInput = subjectCode;
          return service.checkSubjectCode(entry);
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

