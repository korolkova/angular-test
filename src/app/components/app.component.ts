import { Component, OnInit } from '@angular/core';
import { Contact} from '../contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'my-app',
  template:`
  <h2>My contacts</h2>
  <ul class="contacts">
    <li *ngFor="let contact of contacts" (click)="onSelect(contact)" [class.selected]="contact === selectedContact">
      <span class="badge">{{contact.id}}</span>{{contact.name}}
    </li>
  </ul>
  <my-contact-details [contact]="selectedContact"></my-contact-details>
  `,
  styleUrls: [ 'styles/app.component.css'],
})

export class AppComponent implements OnInit  { 
  title = "My contacts";
  contacts : Contact[];
  selectedContact: Contact;
  onSelect(contact: Contact): void{
    this.selectedContact=contact;
  }
  constructor(private contactService: ContactService){ 
  }
  getContacts(): void{
    this.contacts=this.contactService.getContacts();
    //this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }
  ngOnInit(): void {
    this.getContacts();
  }
}