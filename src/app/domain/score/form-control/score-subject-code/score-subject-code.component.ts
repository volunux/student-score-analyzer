import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-score-subject-code',
  templateUrl: './score-subject-code.component.html'
})
export class ScoreSubjectCodeComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean = true;
  @Input() public entityForm: AbstractControl;

  get subjectCode(): AbstractControl | null {
    return this.entityForm?.get('subjectCode');
  }

  get $entityForm(): FormGroup {
    return this.entityForm as FormGroup;
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('subjectCode')?.disable();
  }
}
