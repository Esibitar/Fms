import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private access_token: string = '';
  private registerTenantAPI = 'https://6be7-154-159-252-222.ngrok-free.app/landlord/registertenant';

  constructor(private http: HttpClient, private authService: AuthService) {
    // this.access_token = this.authService.getAccessToken();
    this.access_token = this.authService.sessionData()?.access_token || '';
   }

   setAccessToken(token: string): void {
    this.access_token = token;
  }

  // Retrieve the access token
  getAccessToken(): string {
    return this.access_token;
  }

  addTenant(tenant: { username: string, password: string }): Observable<any> {
    console.log(this.access_token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`
    });
    console.log(tenant);
    return this.http.post(this.registerTenantAPI, tenant, { headers });

  }
}
