import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/logic/models/contact';
import { ContactsService } from 'src/app/logic/services/contacts.service';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css'],
  providers: [ContactsService]

})
export class ContactsViewComponent implements OnInit {

  constructor(
    private _contactService: ContactsService
  ) { }

  @Input() contact: Contact = {} as Contact;
  connections: Array<Contact> = [];

  ngOnInit(): void {
    this._contactService.getAllContacts().subscribe((contacts => {
      for (let contact of contacts.contacts) {
        for (let connection of this.contact.connections) {
          if (contact.id == connection)
            this.connections.push(contact);
        }
      }
      console.log(this.connections);
    }));
  }

  searchContact(id:String){
    document.location.href = 'contact/' + id;
  }

}
