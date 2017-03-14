import { Component, OnInit, EventEmitter } from '@angular/core';
import { Contact} from '../contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app.component.html',
  styleUrls: [ 'styles/app.component.css'],
})

export class AppComponent implements OnInit  { 
  title = "My contacts";
  contacts : Contact[];
  selectedContact: Contact;
  errorMessage: string;
  
  constructor(private contactService: ContactService){}
  
  getContacts(): void{
    //this.contacts=this.contactService.getContacts();
    this.contactService
      .getContacts()
      .then(contacts=> this.contacts=contacts,
            error =>  this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getContacts();    
  }

  onSelect(contact: Contact): void{
    this.selectedContact=contact;
  }

  save(contact: Contact): void{
    this.contactService.addContact(contact)
    .then(contacts=> console.log('Успех'),
            error =>  this.errorMessage = <any>error);
  }
}

