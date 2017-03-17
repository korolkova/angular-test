import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Contact} from '../../contact';

@Component({
  selector: 'my-contact-add',
  templateUrl: 'app/components/contact-add-component/contact-add.component.html',
})

export class ContactAddComponent{
    constructor(private newContact: Contact){}

    @Output() add = new EventEmitter<Contact>();
    onSave(/*newcontact: Contact*/): void{
      this.add.emit(this.newContact);
      this.clearContact();
    }

    clearContact(): void{
      this.newContact.name=null;
      this.newContact.email=null;
    }
}