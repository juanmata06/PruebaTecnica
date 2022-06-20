import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/logic/models/contact';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact = {} as Contact;

  ngOnInit(): void {
  }

}
