import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private http : HttpClient) { }

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required])
  })

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  login(){
    this.http.get<any>("http://localhost:3000/signUpUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password=== this.loginForm.value.password
      });
    //if(this.loginForm.value.email='kunal@bajajfinserv.com' && this.loginForm.value.password =='123'){
       if(user||(this.loginForm.value.email='kunal@bajajfinserv.com' && this.loginForm.value.password =='123456789Ks#') ){
      alert("login Successfull");
      this.loginForm.reset();
      localStorage.setItem('token',"fbfeytfyeigdyge6734r564t7rbdf7n4tr67bf7eufdchgrfrt46yedhbdfttr5ftdeghsxb");
      localStorage.setItem('userType','admin');

      this.router.navigate(['admin/dashboard']);
    }
    else{
      alert("Invalid Credentials Used");
    }
  
})
}

  }


