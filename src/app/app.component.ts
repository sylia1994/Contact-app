import { Component } from '@angular/core';
import {ContactService} from '../services/contact.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact = {nom: 'sylia',email: 'sylia@gmail.com'};
  pageContacts:any;
  private motCle: string;
  private currentpage: number;
  private size: number;



}
