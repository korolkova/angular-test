import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }  from '../components/app-component/app.component';
import { ContactDetailComponent } from '../components/contact-detail-component/contact-detail.component';
import { ContactAddComponent } from '../components/contact-add-component/contact-add.component';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Ng2Bs3ModalModule],
  declarations: [ AppComponent, ContactDetailComponent, ContactAddComponent],
  bootstrap:    [ AppComponent ],
  providers: [ContactService, Contact]
})
export class AppModule { }
