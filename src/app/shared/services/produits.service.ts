import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  serverURL: string = environment.serverURL;

  constructor(private http: HttpClient) {}

  getAllProductFromCategory(cid: string): Observable<Produit | any> {
    return this.http.get(this.serverURL + '/produit/categorie/' + cid);
  }
}
