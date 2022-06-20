import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/logic/services/contacts.service';
import { Contact } from 'src/app/logic/models/contact';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css'],
  providers: [ContactsService]

})
export class ProfileScreenComponent implements AfterViewInit {

  constructor(
    private _activRoute: ActivatedRoute,
    private _contactService: ContactsService

  ) { }

  contactId = "-1";
  contact: Contact = new Contact();
  loaded = false;

  ngAfterViewInit() {
    this._activRoute.paramMap.subscribe((params) => {
      this.contactId = params.get("id") + "";
    });

    this._contactService.getAllContacts().subscribe((contacts => {
      for (let contact of contacts.contacts) {
        if (contact.id == this.contactId) {
          this.contact = contact;
          this.loaded = true;
        }
      }
      console.log(this.contact);
    }));
  }

}
