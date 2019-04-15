import {NgModule} from '@angular/core';
import {RadioChangerComponent} from './radio-changer.component';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {resultReducer} from '../../ngrx/reducers/result.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({videos: resultReducer})
  ],
  declarations: [
    RadioChangerComponent,
  ],
  exports: [RadioChangerComponent]
})
export class RadioChangerModule {
}
