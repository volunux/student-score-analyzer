import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-score-subject-title',
  templateUrl: './score-subject-title.component.html'
})
export class ScoreSubjectTitleComponent implements OnInit {

  constructor() { }

  @Input('disabled') public isDisabled: boolean = true;
  @Input() public entityForm: AbstractControl;

  get subjectTitle(): AbstractControl | null {
    return this.entityForm?.get('subjectTitle');
  }

  get $entityForm(): FormGroup {
    return this.entityForm as FormGroup;
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('subjectTitle')?.disable();
  }

}
