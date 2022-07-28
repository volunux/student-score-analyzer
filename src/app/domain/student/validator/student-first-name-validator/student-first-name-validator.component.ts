import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-first-name-validator',
  templateUrl: './student-first-name-validator.component.html'
})
export class StudentFirstNameValidatorComponent implements OnInit {

  constructor() { }

  @Input() public firstName: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
