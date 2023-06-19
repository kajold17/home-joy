import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, } from '@angular/forms';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm: any;
  public userPassword: any;
  public userConfirmPassword: any;
  
  // public signUpFrom:any;
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // this.signUpForm = this.formBuilder.group({
    //   name: ['',Validators.required],
    //   email: ['',Validators.required],
    //   password: ['',Validators.required],
    //   confirmPassword: ['',Validators.required],
    // })
  }

  onSubmit(userDetails:any){
    console.log(userDetails);
    // const userDetails = {
    //   name: this.signUpForm.value.name,
    //   email: this.signUpForm.value.email,
    //   password: this.signUpForm.value.password
    // }
    this.http.post('http://localhost:9000/users',userDetails,{})
      .subscribe((res)=>{
        console.log(res);
      });
  }
}
