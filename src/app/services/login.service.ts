import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogin:any;

  constructor(private router: Router) { }

  loginUser(){
    console.log("login service");
    this.userLogin = true;
    this.router.navigate(['/home']);
  }

  getUser(){
    return this.userLogin;
  }

}
