import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponents} from "./user-form/user-form.component";

const routes: Routes = [
  { path: "user-form", component: UserFormComponents},
  { path: "user-list", component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
