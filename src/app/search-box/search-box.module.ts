import {NgModule} from '@angular/core';
import {SearchBoxComponent} from './search-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpService} from './Http.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule],
  exports: [SearchBoxComponent],
  declarations: [SearchBoxComponent],
  providers: [HttpService],
})
export class SearchBoxModule {
}
