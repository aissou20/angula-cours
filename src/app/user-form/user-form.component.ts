import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponents implements OnInit {
  email: string = "";
  nom: string = "";
  prenom: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  users: Array<{
    nom: string;
    prenom:string;
    email: string ;
  }> = [];

  addUser() {
    // @ts-ignore
    this.users.push({email: this.email as string, nom: this.nom as string, prenom: this.prenom as string});
  }

  getUserdetails(user: Array<{ email: string, nom: string, prenom: string }>) {
    console.log("user details", user)
  }

}
