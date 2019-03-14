import {NgModule} from '@angular/core';
import {SearchBoxComponent} from './search-box.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [SearchBoxComponent],
  declarations: [SearchBoxComponent],
  providers: [],
})
export class SearchBoxModule {
}
