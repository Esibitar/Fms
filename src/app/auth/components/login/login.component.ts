import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrNotificationService } from 'src/app/toastrNotification/toastr.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  sessionObject: any;


  constructor(private router: Router, private authService: AuthService, private notificationToastr: ToastrNotificationService){

  }

  ngOnInit(): void {
    if(this.authService.sessionData()!== null){
    this.sessionObject = this.authService.sessionData();
    console.log("mybject :"+this.sessionObject.token)
    if(this.sessionObject !== null){
    const sessionToken = this.sessionObject.token;
      if(sessionToken !== null){
        this.router.navigate(['/dashboard'])
      }
    }
  }
  // const data = sessionStorage.getItem('data');
  //   if(data!==null){
  //   const sessionObject = JSON.parse(data);
  //   const sessionToken = sessionObject.token;
  //   if(sessionToken !== null)
  //   {
  //     this.router.navigate(['/dashboard'])
  //   }
  // }

      this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })
  }

  login(){
    if(this.formGroup.valid){

      console.log(this.formGroup.value);
      this.authService.login(this.formGroup.value).subscribe((result) =>{//2000/ok
        // const id = result.id;
        //const token = result.token;
        sessionStorage.setItem('data', JSON.stringify(result));
        this.notificationToastr.showSuccess("successfully login")
        this.router.navigate(['dashboard']);


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
    }

  }

}

/*
  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Assuming the API response contains the access token and refresh token
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        const role = response.role;

        if (accessToken && refreshToken) {
          sessionStorage.setItem('access_token', accessToken);
          sessionStorage.setItem('refresh_token', refreshToken);
          sessionStorage.setItem('role', role);
          // Optionally, you can navigate to another page or perform other actions after successful login.
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
*/
