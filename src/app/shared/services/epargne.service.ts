import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Epargne } from '../interfaces/epargne';

@Injectable({
  providedIn: 'root',
})
export class EpargneService {
  private serverURL: string = environment.serverURL;

  constructor(private http: HttpClient) {}

  addEpargne(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${localStorage.getItem('x-access-token')}`,
    });
    return this.http.post(this.serverURL + '/epargne', data, { headers });
  }

  getUserEpargne(id: string): Observable<Epargne | any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${localStorage.getItem('x-access-token')}`,
    });
    return this.http.get(this.serverURL + `/epargne?uid=${id}`, { headers });
  }
}
