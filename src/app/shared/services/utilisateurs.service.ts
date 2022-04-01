import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Epargne } from '../interfaces/epargne';

@Injectable({
  providedIn: 'root',
})
export class UtilisateursService {
  serverURL: string = environment.serverURL;

  constructor(private http: HttpClient) {}

  getAllUsers(s: string = ''): Observable<Epargne | any> {
    return this.http.get(this.serverURL + '/users?s=' + s);
  }

  login(numero: string, pwd: string): Observable<any> {
    const data = {
      numero,
      password: pwd,
    };
    return this.http.post(`${this.serverURL}/signin`, data);
  }

  getuser(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${localStorage.getItem('x-access-token')}`,
    });
    return this.http.get(`${this.serverURL}/profile/${id}`, { headers });
  }

  getprofile(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${localStorage.getItem('x-access-token')}`,
    });
    return this.http.get(`${this.serverURL}/profile`, { headers });
  }
}
