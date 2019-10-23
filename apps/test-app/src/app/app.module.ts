import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestButtonModule } from '@zyckzto-npm-test/test-button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
