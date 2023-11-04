import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private apiUrl = 'https://localhost:7228/api/login/user';


  constructor(private http: HttpClient) {}

  authenticateUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data)
      .pipe(
        catchError((error: any) => {
          console.error('An error occurred:', error);
          throw error;
        })
      );
  }
  
}
