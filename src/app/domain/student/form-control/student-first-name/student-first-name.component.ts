import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-first-name',
  templateUrl: './student-first-name.component.html'
})
export class StudentFirstNameComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get firstName(): AbstractControl | null {
    return this.entityForm?.get('firstName');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('firstName')?.disable();
  }

}
