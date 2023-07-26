import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  sessionObject: any;

  login(data): Observable<any>{
   return this.http.post('https://6be7-154-159-252-222.ngrok-free.app/login', data);  //https://dummyjson.com/auth/login, https://propertyio.onrender.com/login, http://192.168.0.108:8080/api/v1/auth/authenticate'
  }


  signup(data): Observable<any>{
   return this.http.post('http://192.168.0.108:8080/api/v1/auth/register', data);
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
  return this.http.get('https://177a40a79e73d6.lhr.life/profile/getTenant/gathiru@gmail');
}

}

/* login(username: string, password: string): Observable<any>{
  const data = { username, password }
  console.log("response")
  return this.http.post<any>('https://propertyio.onrender.com/login', data);
  */
