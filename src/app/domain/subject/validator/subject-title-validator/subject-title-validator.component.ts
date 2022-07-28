import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subject-title-validator',
  templateUrl: './subject-title-validator.component.html'
})
export class SubjectTitleValidatorComponent implements OnInit {

  constructor() { }

  @Input() public title: AbstractControl | null = null;

  ngOnInit(): void {
  }

}
