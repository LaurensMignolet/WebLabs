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
  onlyFavorites : boolean = false;
  constructor(private service: ContactService){}

  ngOnInit(): void {
    this.fetchContactList(this.onlyFavorites);
  }

  fetchContactList(onlyFavo: boolean ): void{
    this.service.getContactList(onlyFavo).subscribe(data => {this.contactList = data});
  }


    handleData(event:Contact){
      console.log("recieved Data!", event)
    }

    HandleUpdate(): void{
        this.fetchContactList(this.onlyFavorites)
    }

    createContact(event: Contact){
      this.service.addContact(event).subscribe(()=>this.fetchContactList(this.onlyFavorites))
    }

    toggleView(onlyFavo: boolean): void{
      this.onlyFavorites = !onlyFavo;
      this.fetchContactList(this.onlyFavorites);
    }


  title = 'contactApp';
}
