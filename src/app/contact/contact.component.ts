import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Contact } from '../../models/contact.model';
import {ContactService} from '../services/contact.service'

@Component({
    selector: 'app-contact',
    templateUrl:'./contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{

    @Input() contact: Contact;
    @Input() index: number;
    @Output() onUpdate: EventEmitter<any> = new EventEmitter();

    constructor(private service: ContactService){}

    toggleFavorite(id: string, isFavorite: boolean): void {
    
        this.service.updateContact(id, {isFavorite: isFavorite}).subscribe(() => this.onUpdate.emit());
    }

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