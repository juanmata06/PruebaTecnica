import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/logic/services/contacts.service';
import { ContactsCredentials } from 'src/app/logic/models/contactsCredentials';
import { Contact } from 'src/app/logic/models/contact';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [ContactsService]

})
export class ContactsListComponent implements OnInit {

  constructor(
    private _contactService: ContactsService
  ) { }

  contactsNames: Array<ContactsCredentials> = [];

  ngOnInit(): void {
    this._contactService.getAllContacts().subscribe((contacts => {
      for(let contact of contacts.contacts){
        this.contactsNames.push(new ContactsCredentials(contact.id, contact.name));
      }
    }));
  }

  searchContact(id:String){
    document.location.href = 'contact/' + id;
  }
  
}
