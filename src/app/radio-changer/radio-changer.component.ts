import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-radio-changer',
  templateUrl: './radio-changer.component.html',
  styleUrls: [`./radio-changer.component.scss`]
})
export class RadioChangerComponent {
  @Output() radioValueToApp = new EventEmitter<string>();

  emitIt(value) {
    this.radioValueToApp.emit(value);
  }
}
