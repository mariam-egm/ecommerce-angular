import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:'',
      password:''
    })

    this.loginForm.valueChanges.subscribe(console.log)
  }
  onSubmit(){
    let localUsers: any;
    let isMember: boolean= false;
    if (localStorage.getItem("localUsers")) {
      localUsers = JSON.parse(localStorage.getItem('localUsers'));
    } else {
        localUsers = [];
    }
    for(var i=0; i<localUsers.length; i++){
      if(localUsers[i].email == this.loginForm.value.email)
      {
        isMember = true;
        if(localUsers[i].password == this.loginForm.value.password)
        {
          console.log('you are logged in');
        }else{
          alert('Wrong user name or password');
        }
      }
    }
    if(isMember == false){
      alert('You are not a member! Please register');
    }  
  }
}
