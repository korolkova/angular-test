import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Contact} from '../../contact';
import { ContactService } from '../../services/contact.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app-component/app.component.html',
  styleUrls: [ 'app/components/app-component/app.component.css'],
})

export class AppComponent implements OnInit  { 
  title = "My contacts";
  contacts : Contact[];
  selectedContact: Contact;
  errorMessage: string;

  @ViewChild('modalUpdate')
  modalUpdate: ModalComponent;
  @ViewChild('modalAdd')
  modalAdd: ModalComponent;
  
  
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
    this.contactService.updateContact(contact)
    .then(contacts=> {this.getContacts(),  this.closeModalUpdate()},
            error =>  this.errorMessage = <any>error);
  }

  remove(id: number): void{
    this.contactService
      .removeContact(id)
      .then(contacts=> {this.getContacts()},
            error =>  this.errorMessage = <any>error);
  }

  add(contact: Contact): void{
    this.contactService.addContact(contact)
    .then(contacts=> {this.getContacts(), this.closeModalAdd()},
            error =>  this.errorMessage = <any>error);
  }

  closeModalUpdate(): void{
    this.modalUpdate.close();
  }

  openModalUpdate(): void{
    this.modalUpdate.open();
  }

  closeModalAdd(): void{
    this.modalAdd.close();
  }

  openModalAdd(): void{
    this.modalAdd.open();
  }
}

