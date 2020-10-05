import { Component } from '@angular/core';
import {Contact} from '../models/contact.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[];
  ngOnInit(): void {

    this.contactList = [
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
        ),  new Contact(
          'Laurens Mignolet', 
          'john.doe@gmail.com', 
          '01166424893',
           true,
          'assets/avatar.png'
          )

            ]
        }

    handleData(event:Contact){
      console.log("recieved Data!", event)
    }

  title = 'contactApp';
}
