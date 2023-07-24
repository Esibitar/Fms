import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  firsname: string;
  lastname: string;
  email: string;
  password: string;

  formGroup: FormGroup;
  sessionObject: any;

  constructor(private router: Router, private authService: AuthService){

  }

  ngOnInit(): void {
    if(this.authService.sessionData()!== null){
    this.sessionObject = this.authService.sessionData();
    console.log("mybject:"+this.sessionObject)
    if(this.sessionObject !== null){
    const sessionToken = this.sessionObject.token;
      if(sessionToken !== null){
        this.router.navigate(['/dashboard'])
      }
    }
  }

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })
  }

  signUp(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
      this.authService.signup(this.formGroup.value).subscribe((result) =>{//2000/ok
        const id = result.id;
        //const token = result.token;
        sessionStorage.setItem('data', JSON.stringify(result))

      this.router.navigate(['login']);

      },
      (error: HttpErrorResponse)=>{// 400 bad request
        if(error.status === 403){
          alert("invalid credentials")
        }
        else {// other
          alert("unknown error")
        }
      }

      )
    }else{
      console.log("not valid");
    }

  }



}
