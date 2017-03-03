import { Component } from '@angular/core';
import { Contact} from './contact';

@Component({
  selector: 'my-app',
  template:`
  <h2>My contacts</h2>
  <ul class="contacts">
    <li *ngFor="let contact of contacts" (click)="onSelect(contact)" [class.selected]="contact === selectedContact">
      <span class="badge">{{contact.id}}</span>{{contact.name}}
    </li>
  </ul>
  <div *ngIf="selectedContact">
  <h2>{{selectedContact.name}} details!</h2>
    <div><label>id: </label>{{selectedContact.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedContact.name" placeholder="name"/>
    </div>
  </div>
  `,
  styleUrls: [ 'styles/app.component.css']
})

export class AppComponent  { 
  title = "My contacts";
  contacts = CONTACTS;
  selectedContact: Contact;
  onSelect(contact: Contact): void{
    this.selectedContact=contact;
  }
}

const CONTACTS: Contact[] =[
  {id: 1, name: 'TestName1'},
  {id: 2, name: 'TestName2'},
  {id: 3, name: 'TestName3'},
]
