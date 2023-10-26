import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private apiUrl = 'http://localhost:5276/api/user/insert';


  constructor(private http: HttpClient) {}

  insertUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
