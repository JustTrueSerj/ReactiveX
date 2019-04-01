import {Component} from '@angular/core';

@Component({
  selector: `app-wrapper`,
  templateUrl: `./wrapper.component.html`,
  styleUrls: [`./wrapper.component.scss`]
})
export class WrapperComponent {
  radioValue: string;
  confirmRadioValue(event) {
    this.radioValue = event;
  }
}

