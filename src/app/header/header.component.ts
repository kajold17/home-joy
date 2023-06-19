import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userLogin:any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // console.log("state management",this.loginService.userLogin);
    this.userLogin = this.loginService.getUser();

  }


}
