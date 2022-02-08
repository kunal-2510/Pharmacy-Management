import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signupForm!: FormGroup;
  constructor (private router :Router,private formBuilder :FormBuilder,private http :HttpClient){}

  //  signupForm = new FormGroup({
  //   fullname:new FormControl('',Validators.required),
  //     email:new FormControl('',[Validators.required,Validators.email]),
  //     password:new FormControl('',Validators.required),
  //     mobile:new FormControl('',[Validators.required])
  //  })
   get email(){return this.signupForm.get('email')}
   get password(){return this.signupForm.get('password')}
   get fullname(){return this.signupForm.get('fullname')}
   get mobile(){return this.signupForm.get('mobile')}   

   ngOnInit():void{
     this.signupForm=this.formBuilder.group({
       fullname:['',Validators.required],
       email:['',Validators.required],
       password:['',Validators.required],
       mobile:['',Validators.required]
     })
   }
  signUp(){
    this.http.post<any>("http://localhost:3000/signUpUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  
  }
}
