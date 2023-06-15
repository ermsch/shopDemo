import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/User";
import {users} from "../users";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  users: User[] = users

  loggedUser!: User







  constructor() { }

  ngOnInit() {

  }
}
