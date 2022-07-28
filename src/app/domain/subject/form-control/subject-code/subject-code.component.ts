import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subject-code',
  templateUrl: './subject-code.component.html'
})
export class SubjectCodeComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get code(): AbstractControl | null {
    return this.entityForm?.get('code');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('code')?.disable();
  }

}
