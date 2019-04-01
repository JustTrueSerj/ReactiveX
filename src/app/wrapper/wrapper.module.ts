import {NgModule} from '@angular/core';
import {WrapperComponent} from './wrapper.component';
import {RadioChangerModule} from './radio-changer/radio-changer.module';
import {SearchBoxModule} from './search-box/search-box.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RadioChangerModule,
    SearchBoxModule,
    CommonModule
  ],
  exports: [WrapperComponent],
  declarations: [WrapperComponent],
  providers: [],
})
export class WrapperModule {
}
