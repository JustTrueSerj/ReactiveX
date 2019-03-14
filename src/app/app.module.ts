import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchBoxModule} from './search-box/search-box.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
