import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';


import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:any;
  public password: any;
  // public User=[];

  constructor(
    private http: HttpClient,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email)
    if(this.email != '' && this.email != undefined && this.password != '' && this.password != undefined){
      this.http.post('http://localhost:9000/users/login',{ 
            email: this.email,
            password: this.password
          })
        .subscribe((res)=>{
          console.log("login user: ",res);
          this.loginService.loginUser();
          // const users = res;
          // const userExists = this.checkUserExists(users);
          // console.log("User exi  sts:", userExists);
          // if(userExists){
          //   this.loginService.loginUser();
          // }
        },(err:any)=>{
          console.error(err);
        })
    }
    // else if(){

    // }
    else{
      console.log('please enter email and password');
    }
      
  }

  // checkUserExists(users:any){
  //   const user = { 
  //     email: this.email,
  //     password: this.password
  //   };
  //   return users.some((u:any) => u.email === user.email && u.password === user.password );
  // }

}
