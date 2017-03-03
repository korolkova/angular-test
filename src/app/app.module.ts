import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactDetailComponent } from './contact-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ContactDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
