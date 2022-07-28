import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subject-code-validator',
  templateUrl: './subject-code-validator.component.html'
})
export class SubjectCodeValidatorComponent implements OnInit {

  constructor() { }

  @Input() public code: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
