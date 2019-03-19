import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode:number=1;
  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    console.log(this.contact);
    this.contactService.saveContact(this.contact)
      .subscribe(data=>{
        this.contact=data;
        console.log(data);
        this.mode=2;
        }, err=> {
          //console.log(err)
          throw err;
      });
  }

  showNewContactForm() {
    this.mode=1;
    this.contact =new Contact();
  }
}
