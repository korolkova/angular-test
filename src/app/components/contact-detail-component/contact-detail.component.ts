import { Component, Input, Output, EventEmitter,  } from '@angular/core';
import { Contact} from '../../contact';

@Component({
  selector: 'my-contact-details',
  templateUrl: 'app/components/contact-detail-component/contact-detail.component.html',
})

export class ContactDetailComponent{
    @Input() contact: Contact;

    @Output() save = new EventEmitter<Contact>();
    onSave(contact: Contact): void{
      this.save.emit(contact);
    }
}