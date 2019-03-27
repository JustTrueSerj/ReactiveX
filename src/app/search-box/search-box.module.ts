import {NgModule} from '@angular/core';
import {SearchBoxComponent} from './search-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpService} from '../shared/http.service';
import {CommonModule} from '@angular/common';
import {AutofocusDirective} from '../shared/autofocus.directive';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule],
  exports: [SearchBoxComponent],
  declarations: [SearchBoxComponent, AutofocusDirective],
  providers: [HttpService],
})
export class SearchBoxModule {
}
