import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { ProfileCardComponent } from './templates/profile-card/profile-card.component';
import { ProfileScreenComponent } from './modules/profile-screen/profile-screen.component';
import { ProfileViewComponent } from './templates/profile-view/profile-view.component';
import { ContactsViewComponent } from './templates/contacts-view/contacts-view.component';
import { ContactsListComponent } from './templates/contacts-list/contacts-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ProfileCardComponent,
    ProfileScreenComponent,
    ProfileViewComponent,
    ContactsViewComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
