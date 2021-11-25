import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule} from "@angular/router";
import {UserFormComponents} from "./user-form/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
