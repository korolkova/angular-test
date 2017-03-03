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
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .contacts {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .contacts li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .contacts li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .contacts li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .contacts .text {
    position: relative;
    top: -3px;
  }
  .contacts .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
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
