import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-admission-number-validator',
  templateUrl: './student-admission-number-validator.component.html'
})
export class StudentAdmissionNumberValidatorComponent implements OnInit {

  constructor() { }

  @Input() public admissionNumber: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
