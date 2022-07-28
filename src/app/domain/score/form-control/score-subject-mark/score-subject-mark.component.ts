import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-score-subject-mark',
  templateUrl: './score-subject-mark.component.html'
})
export class ScoreSubjectMarkComponent implements OnInit {

  constructor() { }

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: AbstractControl;

  get overallMark(): AbstractControl | null {
    return this.entityForm?.get('overallMark');
  }

  get $entityForm(): FormGroup {
    return this.entityForm as FormGroup;
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('overallMark')?.disable();
  }

}
