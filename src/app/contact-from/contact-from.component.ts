import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css']
})
export class ContactFromComponent implements OnInit {

  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();

  form: FormGroup; 

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
    this.form = new FormGroup({
      "name" : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "email" : new FormControl(null, [Validators.required]),
      "phone": new FormControl(null, [Validators.required, Validators.minLength(9)]),
      "isFavorite": new FormControl(false),
      "avatar": new FormControl(null)
    });
  }

}
