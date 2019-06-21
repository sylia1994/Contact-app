import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import {map} from 'rxjs/operators';
import * as url from 'url';
import {error} from 'util';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentpage:number=0;
  size:number=5;
  pages:Array<number>;
  mode=1;
  public popoverMessage = 'Confirmer la suppression ?';
  constructor(public http: HttpClient, public contactservice:ContactService,public router:Router) { }

  ngOnInit() {
    this.contactservice.getAllContacts()
      .subscribe(data=>{
        this.pageContacts=data;
        console.log(data);
      },error=>{
        console.log(error);
      })
  }

  doSearch(){
    this.contactservice.getContacts(this.motCle,this.currentpage,this.size)
      .subscribe(data=>{
        this.pageContacts=data;
        this.pages=new Array(((data as any).totalPages));
      },error=>{
        console.log(error);
      })
  }

  chercher(){
    this.doSearch();
  }
  gotoPage(i:number){
    this.currentpage=i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['editContact',id]);
  }

  onDeleteContact(c:  Contact) {
    let confirm=window.confirm('Voulez-vous vraiment supprimer ce contact?');
      if (confirm==true){
        this.contactservice.deleteContact(c.id)
          .subscribe(data=>{
            this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1);
      }


      ,error=>{
        console.log(error);
        alert("Le contact n'a pas été supprimé");
      })
  }
}

  openPopup(c: any) {

  }

  }

