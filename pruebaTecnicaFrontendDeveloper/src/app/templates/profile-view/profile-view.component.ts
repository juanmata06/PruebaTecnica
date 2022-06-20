import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/logic/models/contact';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})

export class ProfileViewComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact = {} as Contact;

  ngOnInit(): void {
    console.log(this.contact);
  }

}
