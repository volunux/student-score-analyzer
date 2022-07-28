import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-home-address-validator',
  templateUrl: './student-home-address-validator.component.html'
})
export class StudentHomeAddressValidatorComponent implements OnInit {

  constructor() { }

  @Input() public homeAddress: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
