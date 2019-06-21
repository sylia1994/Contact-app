import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact= new Contact();
  mode:number=1;

  constructor(public contactsService:ContactService) { }

  ngOnInit(){

  }


  saveContact() {
    this.contactsService.saveContact(this.contact)
      .subscribe(data => {
          this.contact = data as Contact;

        this.mode=2;

      }, error => {
        console.log(error);
      })
  }

  Remettrezero() {
    this.contact.id =null;
    this.contact.nom="";
    this.contact.prenom="";
    this.contact.email="";
    this.contact.tel=0;
  }
}
