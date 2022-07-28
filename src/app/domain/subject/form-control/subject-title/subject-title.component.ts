import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subject-title',
  templateUrl: './subject-title.component.html'
})
export class SubjectTitleComponent implements OnInit {

  @Input('disabled') public isDisabled: boolean;
  @Input() public entityForm: FormGroup;

  get title(): AbstractControl | null {
    return this.entityForm?.get('title');
  }

  ngOnInit(): void {
    if (this.isDisabled) this.entityForm?.get('title')?.disable();
  }

}
