import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/logic/services/contacts.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [ContactsService]

})
export class SideBarComponent implements OnInit {

  constructor(    
    private _contactService: ContactsService
    ) { }

    name = "";
  ngOnInit(): void {
  }

  search(){
    this._contactService.getAllContacts().subscribe((contacts => {
      for(let contact of contacts.contacts){

      }
    }));
  }

}
