import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subject-year-validator',
  templateUrl: './subject-year-validator.component.html'
})
export class SubjectYearValidatorComponent implements OnInit {

  constructor() { }

  @Input() public year: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
