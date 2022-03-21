import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../interfaces/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  serverURL: string = environment.serverURL;

  constructor(private http: HttpClient) {}

  getAllCategories(
    nom: string = '',
    del: boolean = false
  ): Observable<Categorie | any> {
    return this.http.get(
      this.serverURL + `/categorie?nom=${nom}&delete=${del}`
    );
  }

  addCategory(nom: string, desc: string) {
    return this.http.post(this.serverURL + '/categorie', {
      nom: nom,
      description: desc,
    });
  }

  editCategorie(data: any, id: string) {
    return this.http.put(this.serverURL + '/categorie/' + id, data);
  }

  archiveCategorie(id: string, del: boolean = true) {
    return this.http.put(
      this.serverURL + `/categorie/delete/${id}?delete=${del}`,
      {}
    );
  }
}
