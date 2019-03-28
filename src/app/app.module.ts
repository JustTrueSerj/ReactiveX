import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchBoxModule} from './search-box/search-box.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './shared/http.service';
import {FormsModule} from '@angular/forms';
import { PluralizePipe } from './shared/pluralize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // PluralizePipe,
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
