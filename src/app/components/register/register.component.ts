import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]],
      password:['', 
      [Validators.required, 
      Validators.minLength(8),
      Validators.maxLength(16)]],
    })

    this.registerForm.valueChanges.subscribe(console.log)
  }

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  
  onSubmit(){
    let localUsers: any;

    if (localStorage.getItem("localUsers")) {
      localUsers = JSON.parse(localStorage.getItem('localUsers'));
    } else {
        localUsers = [];
    }
    
    let newUser = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    localUsers.push(newUser);
    localStorage.setItem("localUsers", JSON.stringify(localUsers));
  }
}
