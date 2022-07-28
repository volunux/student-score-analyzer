import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-score-subject-mark-validator',
  templateUrl: './score-subject-mark-validator.component.html'
})
export class ScoreSubjectMarkValidatorComponent implements OnInit {

  constructor() { }

  @Input('mark') public overallMark: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
