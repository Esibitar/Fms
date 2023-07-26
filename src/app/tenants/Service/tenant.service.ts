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
   }

  addTenant(tenant: { username: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`
    });

    return this.http.post(this.registerTenantAPI, tenant, { headers })
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            return this.refreshTokenAndRetry(tenant);
          }
          return throwError(error);
        })
      );
  }

  private refreshTokenAndRetry(tenant: { username: string, password: string }): Observable<any> {

    return this.authService.refreshToken().pipe(
      switchMap((newAccessToken: string) => {
        this.access_token = newAccessToken;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newAccessToken}`
        });

        // Retry the API request with the new access token
        return this.addTenant(tenant);
      }),
      catchError((error) => {
        // Handle token refresh error or any other errors
        return throwError(error);
      })
    );
  }
}
