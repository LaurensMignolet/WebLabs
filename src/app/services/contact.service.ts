import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Injectable()
export class ContactService {
    contactList: Contact[] = [
        new Contact(
            'Peter Doe', 
            'john.doe@gmail.com', 
            '01166424893',
             true,
            'assets/avatar.png'
            ),
        new Contact(
          'John Doe', 
           'john.doe@gmail.com', 
           '01166424893',
           true,
            'assets/avatar.png'
              ),  
        new Contact(
            'Laurens Mignolet', 
            'john.doe@gmail.com', 
            '01166424893',
             true,
            'assets/avatar.png'
                )
    ];

    constructor(){ }

    getContactList(): Contact[]{
        return this.contactList;
    }

    addContact(contact:Contact): void{
        this.contactList.push(contact);
    }

    toggleFavorite(index:number): void{
        this.contactList[index].isFavorite = !this.contactList[index].isFavorite;
    } 

}