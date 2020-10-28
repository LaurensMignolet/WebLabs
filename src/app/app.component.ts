import { Component } from '@angular/core';
import {Contact} from '../models/contact.model'
import { ContactService } from './services/contact.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[];

  constructor(private service: ContactService){}

  ngOnInit(): void {
    this.contactList = this.service.getContactList();
  }



    handleData(event:Contact){
      console.log("recieved Data!", event)
    }

    HandleUpdate(): void{
      this.contactList = this.service.getContactList();
    }

    createContact(event: Contact){
      this.service.addContact(event);
      this.contactList = this.service.getContactList();
    }

  title = 'contactApp';
}
