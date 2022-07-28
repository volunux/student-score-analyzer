import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subject-year',
  templateUrl: './subject-year.component.html'
})
export class SubjectYearComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get year(): AbstractControl | null {
    return this.entityForm?.get('year');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('year')?.disable();
  }

}
