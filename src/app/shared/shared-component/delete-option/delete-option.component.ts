import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeleteMessage } from '../../shared-service/delete-message';

@Component({
  selector: 'app-delete-option',
  templateUrl: './delete-option.component.html'
})
export class DeleteOptionComponent implements OnInit {

  constructor() { }

  @Input() public entries: any[] = [];
  @Input() public deleteMessage: DeleteMessage | null = null;
  @Output() public itemsReadyToDelete: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {

  }

  public processDelete(): void {
    this.itemsReadyToDelete.emit();
  }

}
