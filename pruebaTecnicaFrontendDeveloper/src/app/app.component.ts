import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ContactsService } from './logic/services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactsService]
})
export class AppComponent implements OnInit {
  title = 'Prueba Tecnica';

  constructor(
    private _contactService: ContactsService
  ) { }

  ngOnInit() {
    /*
    this._contactService.getAllContacts().subscribe((response => {
      console.log(response);
    }));
    */
  }

  goHome(){
    document.location.href = '';
  }
}
