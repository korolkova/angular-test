import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

/*import 'rxjs/add/operator/toPromise';*/

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact} from '../contact';

/*const CONTACTS: Contact[] =[
    { id: 1, name: 'testname1', email: 'email1'},
    { id: 2, name: 'testname2', email: 'email2'},
]*/

@Injectable()
export class ContactService {
    //private headers = new Headers({'Content-Type': 'application/json'});
    private contactsUrl='http://localhost:8080/users';
    //private contactsUrl2='http://localhost:8080/users/18';
    constructor(private http:Http){}

    getContacts(){
    return this.http.get(this.contactsUrl)
                    .map(response => response.json());
  }
    /*getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl)
        .toPromise()
        .then(response => response.json().data as Contact[])
        .catch(this.handleError);
    }*/

    /*private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.massage||error);
    }*/
    
    /*getContacts(): Contact[] {
        return CONTACTS;
    }*/
    /*getContacts(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
    }*/
}