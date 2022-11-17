import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    /* SOLUTION AVEC FORMGROUP
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(5)])
    })
    */

    //SOLUTION AVEC FORMBUILDER
    this.loginForm = this.fb.group(
      {email:['',Validators.required,Validators.email],
      password:['',Validators.required,Validators.minLength(5)]}
    )

  }
  verifyLogin(){
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password)
  }

}
