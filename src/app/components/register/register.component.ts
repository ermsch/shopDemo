import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  validateForm!: UntypedFormGroup;

  newUser!: User

  submitForm(): void {
    if (this.validateForm.valid) {
      this.userService.users.push(this.validateForm.value)
      this.router.navigate(['/login'])
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  registerUser(userValue: User){

    this.userService.users.push(userValue)

  }

  checkUsers(){

  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  constructor(
    private fb: UntypedFormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: this.userService.users.length + 1,
      email: [null, [Validators.email, Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      userName: [null, [Validators.required]],
      agree: [false]
    });
  }

}
