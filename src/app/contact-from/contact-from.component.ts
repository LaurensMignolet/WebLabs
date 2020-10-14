import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css']
})
export class ContactFromComponent implements OnInit {

  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  submit(form): void{
    let contact:Contact = new Contact(
      form.value.name,
      form.value.email,
      form.value.phone,
      form.value.isFavorite,
      form.value.avatar
    )
    form.reset();
  this.onSubmit.emit(contact);

  }


  ngOnInit(): void {
  }

}