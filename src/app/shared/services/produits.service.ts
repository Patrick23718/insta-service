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

  addProduct(data: any): Observable<Produit> {
    return this.http.post(
      this.serverURL + '/produit',
      data
    ) as Observable<Produit>;
  }

  getAllProduct(
    cid: string = '',
    s: string = '',
    del: boolean = false
  ): Observable<Produit[]> {
    return this.http.get(
      `${this.serverURL}/produit?s=${s}&cid=${cid}&del=${del}`
    ) as Observable<Produit[]>;
  }

  updateProduit(id: string, data: Produit) {
    return this.http.put(`${this.serverURL}/produit/${id}`, data);
  }
}
