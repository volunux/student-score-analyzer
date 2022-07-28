import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-email-address',
  templateUrl: './student-email-address.component.html'
})
export class StudentEmailAddressComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get emailAddress(): AbstractControl | null {
    return this.entityForm?.get('emailAddress');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('emailAddress')?.disable();
  }

}
