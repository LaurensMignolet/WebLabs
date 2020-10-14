import { Component, OnInit, Input, Output } from '@angular/core'
import { Contact } from '../../models/contact.model';

@Component({
    selector: 'app-contact',
    templateUrl:'./contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

    @Input() contact: Contact;

    ngOnInit(){
        //this.name = 'John Doe';
        //this.email = 'John.doe@gmail.com';
        //this.phone = '0115645665'
    }


    submit(){
        console.log('submit')
        //this.onSubmit.emit(this.contact);
    }
}