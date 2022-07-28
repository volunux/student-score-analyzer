import { Component, OnInit, Input } from '@angular/core';
import { ValidationError } from '../../shared-service/validation-error';

@Component({
  selector: 'app-entity-validation-error',
  templateUrl: './entity-validation-error.component.html'
})
export class EntityValidationErrorComponent implements OnInit {

  @Input() public errors: ValidationError | null = null;
  @Input('str') public errMsg: string = "";
  public msgList: string[] = [];

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    if (this.errors) {
      this.msgList = [];
      for (let err in this.errors) {
        this.msgList.push(this.errors[err]);
      }
    }
  }

}
