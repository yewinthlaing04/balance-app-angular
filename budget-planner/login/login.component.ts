import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: any ;
  registerForm: any;
  activeform : 'login' | 'register' = 'login';

  constructor ( private form : FormBuilder , private router : Router ) {

  }

  ngOnInit(): void {
    this.loginForm = this.form.group( {
      email: ['' , [Validators.required , Validators.email]],
      password: ['' , [Validators.required]]
    });

    this.registerForm = this.form.group( {
      username : ['' , [Validators.required]],
      email: [ '' , [Validators.required , Validators.email]],
      password: ['' , [Validators.required]]
    })
  }

  toggleForm( form: 'login' | 'register' ) {
    this.activeform = form;
  }

  login(){
    if ( this.loginForm.valid ) {
      console.log("Login Info : " , this.loginForm.value);
      this.router.navigate(['/budget-planner/dashboard'])
    }else {
      this.snackBar.open('Invalid email or password!' , 'Close' , { duration : 3000})
    }
  }
}
