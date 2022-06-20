import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ContactsService {
    constructor(private conexHttp: HttpClient) {}

    //options = new HttpHeaders();
    getAllContacts():Observable<any>{
        return this.conexHttp.get(
            "contactos.json",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }
}