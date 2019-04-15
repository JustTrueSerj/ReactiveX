import {NgModule} from '@angular/core';
import {RadioChangerComponent} from './radio-changer.component';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {VideoEffects} from '../../ngrx/effects/video.effects';
import {StoreModule} from '@ngrx/store';
import {resultReducer} from '../../ngrx/reducers/result.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([VideoEffects]),
    StoreModule.forRoot({videos: resultReducer})
  ],
  declarations: [
    RadioChangerComponent,
  ],
  exports: [RadioChangerComponent]
})
export class RadioChangerModule {
}
