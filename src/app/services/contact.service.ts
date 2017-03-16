import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';//

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact} from '../contact';

/*const CONTACTS: Contact[] =[
    { id: 1, name: 'testname1', email: 'email1'},
    { id: 2, name: 'testname2', email: 'email2'},
]*/

@Injectable()
export class ContactService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private contactsGetAllUsersUrl='http://localhost:8080/users';
    private contactsAddUserUrl='http://192.168.1.231:8080/users/save';
    private contactsRemoveUserUrl='http://localhost:8080/users/remove/';
    constructor(private http:Http){}
    getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsGetAllUsersUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any>{
        console.error('An error occurred2', error);
        return Promise.reject(error.massage||error);
    }   
    updateContact(contact: Contact): Promise<number> {
        return this.http.post(this.contactsAddUserUrl, JSON.stringify({id: contact.id, name: contact.name, email: contact.email}), { headers: this.headers })
            .toPromise()
            .then(response => response.status)
            .catch(this.handleError);
    }
    removeContact(id: number): Promise<number> {
        return this.http.delete('http://localhost:8080/users/remove/' + id)
            .toPromise()
            .then(response => response.status)
            .catch(this.handleError);
    }
    addContact(contact: Contact): Promise<number> {
        return this.http.post(this.contactsAddUserUrl, JSON.stringify({name: contact.name, email: contact.email}), { headers: this.headers })
            .toPromise()
            .then(response => response.status)
            .catch(this.handleError);
    }
}