import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchBoxModule} from './search-box/search-box.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './shared/http.service';
import {FormsModule} from '@angular/forms';
import { AutofocusDirective } from './shared/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    // AutofocusDirective
  ],
  imports: [
    BrowserModule,
    SearchBoxModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
