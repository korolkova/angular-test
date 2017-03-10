import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from '../components/app.component';
import { ContactDetailComponent } from '../components/contact-detail.component';
import { ContactService } from '../services/contact.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, ContactDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [ContactService]
})
export class AppModule { }
