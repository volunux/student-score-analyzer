import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-admission-number',
  templateUrl: './student-admission-number.component.html'
})
export class StudentAdmissionNumberComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get admissionNumber(): AbstractControl | null {
    return this.entityForm?.get('admissionNumber');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('admissionNumber')?.disable();
  }

}
