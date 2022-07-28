import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-last-name',
  templateUrl: './student-last-name.component.html'
})
export class StudentLastNameComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get lastName(): AbstractControl | null {
    return this.entityForm?.get('lastName');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('lastName')?.disable();
  }

}
