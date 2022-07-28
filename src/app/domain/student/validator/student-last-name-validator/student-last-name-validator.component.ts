import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-last-name-validator',
  templateUrl: './student-last-name-validator.component.html'
})
export class StudentLastNameValidatorComponent implements OnInit {

  constructor() { }

  @Input() public lastName: AbstractControl | null = null;

  ngOnInit(): void {
    
  }

}
