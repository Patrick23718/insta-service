import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VersementService {
  private serverURL: string = environment.serverURL;

  constructor(private http: HttpClient) {}

  addVersement(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${localStorage.getItem('x-access-token')}`,
    });
    return this.http.post(this.serverURL + '/versement', data, { headers });
  }

  getUserVersement(eid: string, uid: string = ''): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${localStorage.getItem('x-access-token')}`,
    });
    return this.http.get(this.serverURL + `/versement/${eid}?userId=${uid}`, {
      headers,
    });
  }
}
