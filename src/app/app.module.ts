import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ContactDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [ContactService]
})
export class AppModule { }
