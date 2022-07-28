import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-email-address-validator',
  templateUrl: './student-email-address-validator.component.html'
})
export class StudentEmailAddressValidatorComponent implements OnInit {

  constructor() { }

  @Input() public emailAddress: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
