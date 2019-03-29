import {NgModule} from '@angular/core';
import {RadioChangerComponent} from './radio-changer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    RadioChangerComponent
  ],

  exports: [RadioChangerComponent]
})
export class RadioChangerModule {
}
