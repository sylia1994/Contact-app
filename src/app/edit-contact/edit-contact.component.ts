import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode:number=1;
  contact :Contact=new Contact();
  idContact:number;
  mode1:boolean=false;

  constructor(public activatedRoute:ActivatedRoute, public  contactsService:ContactService, public router:Router) {
    this.idContact=activatedRoute.snapshot.params['id'];
    }


  ngOnInit() {
    this.contactsService.getContact(this.idContact)
      .subscribe(data=>{
        this.contact=data as Contact;
      },error=>{
        console.log(error);})
  }

  updateContact(){
    this.contactsService.updateContact(this.contact)
      .subscribe(data=>{

        this.router.navigate(['contacts']);
        this.mode1=true;
      },error=> {
        console.log(error);
        alert("Mise à jour non effectuée");
      })
      }
}
