import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {error} from 'util';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact = {nom : 'saadi', prenom: 'melek', email: 'saadi.melek@gmail.com'};
  pageContacts:any;
  motCle:string="";
  currentPage:number=0;
  size:number=2;
  pages:Array<number>;
  count:number;

  constructor(public http:Http, public contactsService:ContactsService, public router:Router) { }

  ngOnInit() {
    this.chercher();
  }

  doSearch() {
    this.contactsService.getContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContacts = data;
        this.pages=new Array<number>(data.totalPages);
        this.count=data.totalElements;
      }, err => {
        console.log('error' + err);
        throw err;
      });
  }

  chercher() {
    this.doSearch();
  }

  goToPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditContact(id:number) {
    this.router.navigate(['edit-contact', id]);
  }

  onDeleteContact(contact:Contact) {
    let confirm = window.confirm('etes vous sure ?');
    if(confirm == true) {
      this.contactsService.deleteContact(contact.id)
        .subscribe(
          data => {
            debugger;
            console.log("OK");
            this.pageContacts.content.splice(
              this.pageContacts.content.indexOf(this.contact), 1
            );
          }, err => {
            debugger;
            console.log("KO");
          }
        );
    }
  }
}
