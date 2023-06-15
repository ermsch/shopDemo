import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {Subscription} from "rxjs";
import {users} from "../../users";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userList: User[] = []
  isLogged: boolean = false
  validateForm!: UntypedFormGroup;

  userLoggerSubscription!: Subscription
  loggedUser: User =   {
    id: 2,
    email: 'test',
    firstName: 'test',
    lastName: 'test',
    userName: 'test',
    password: 'test'
  }


  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginValidation(this.validateForm.value.userName, this.validateForm.value.password)
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  loginValidation(userName: string, password: string){
    const foundUser = this.userList.find(user => user.userName === userName && user.password === password)
    if(foundUser){
      this.isLogged = true
      localStorage.setItem('isLogged', 'true')
      this.loggedUser = foundUser
      this.userService.loggedUser = this.loggedUser
    } else {
      this.isLogged = false
      alert('wrong pw')

    }
  }

  logout(){
    localStorage.setItem('isLogged', 'false')
    this.isLogged = false
  }


  loginUser(){

  }

  constructor(
    private fb: UntypedFormBuilder,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.userList = this.userService.users
    const isLoggedTemp = localStorage.getItem('isLogged')
    if(isLoggedTemp === 'true'){
      this.isLogged = true
    } else {
      this.isLogged = false
    }
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
