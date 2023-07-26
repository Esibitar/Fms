import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  sessionObject: any;
  private loginAPI = 'https://6be7-154-159-252-222.ngrok-free.app/login';
  private signupAPI = 'https://6be7-154-159-252-222.ngrok-free.app/login/landlord/registertenant';
  private access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsYW5kbG9yZDE3QGdtYWlsIiwiZXhwIjoxNjkwMzUyNTY3LCJpc3MiOiJodHRwOi8vMTcyLjMwLjgwLjE6ODUwMC9sb2dpbiIsInJvbGVzIjpbImxhbmRsb3JkIl19.BCVqSJQnTz0v3fEhWmwGk_tmpbz9dv-fFcUxgxPR4tw';

  getAccessToken(): string {
    return this.access_token;
  }

  refreshToken(): Observable<string> {

    return this.http.post<{ access_token: string }>(this.loginAPI, {}).pipe(
      map(response => response.access_token),

    );
  }

  login(data): Observable<any>{
    console.log(data)
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
   return this.http.post(this.loginAPI, formData);  //https://dummyjson.com/auth/login, https://propertyio.onrender.com/login, http://192.168.0.108:8080/api/v1/auth/authenticate'
  }


  signup(data): Observable<any>{

   return this.http.post(this.signupAPI, data);
  }
  sessionData(): any {
    const data = sessionStorage.getItem('data');

    if(data !==null){
     return this.sessionObject = JSON.parse(data);

    }else{
    return this.sessionObject= null;
    }

}

tenantInfo(){
  return this.http.get(this.loginAPI);
}

registerTenant(username: string, password: string): Observable<any>{
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.access_token}`,
    'Content-Type': 'application/json'
  });

  const user = {
    username: username,
    password: password,
    role: 'admin'
  };

  return this.http.post('https://441e-154-159-252-12.ngrok-free.app/landlord/registertenant', user, { headers })

}

}

/* login(username: string, password: string): Observable<any>{
  const data = { username, password }
  console.log("response")
  return this.http.post<any>('https://propertyio.onrender.com/login', data);
  */

 /*
 private readonly registration_api_url = 'https://example.com/api/register';
  private readonly access_token = 'your_access_token'; // Replace with the actual access token

  constructor(private http: HttpClient) {}

  registerAdmin(username: string, password: string): Observable<any> {
    // Prepare the request headers with the access token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.access_token}`,
      'Content-Type': 'application/json'
    });

    // Prepare the user data for registration
    const user = {
      username: username,
      password: password,
      role: 'admin'  // Assuming 'admin' is the role for administrators
    };

    // Make the API request to register the user
    return this.http.post(this.registration_api_url, user, { headers });
  }
  */
