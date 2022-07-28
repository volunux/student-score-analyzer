import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-home-address',
  templateUrl: './student-home-address.component.html'
})
export class StudentHomeAddressComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get homeAddress(): AbstractControl | null {
    return this.entityForm?.get('homeAddress');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('homeAddress')?.disable();
  }
}
