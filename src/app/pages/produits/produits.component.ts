import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
  constructor(private categyService: CategorieService) {}
  nom: string = '';
  desc: string = '';
  search: string = '';
  categorie: any = {};

  ngOnInit(): void {
    this.getCategories();
  }
  headers = ['Titre', 'Description', 'Date', 'Actions'];

  getCategories() {
    this.categyService.getAllCategories(this.search).subscribe((res: any) => {
      this.items = res.result;
      console.log(res);
    });
  }

  items: any[] = [];

  AjoutCategorie() {
    this.categyService
      .addCategory(this.nom, this.desc)
      .subscribe((res: any) => {
        console.log(res);
        this.getCategories();
        this.resetValue();
      });
  }

  resetValue() {
    this.nom = '';
    this.desc = '';
    this.search = '';
  }

  ModifierCategorie() {
    this.categyService
      .editCategorie(
        { nom: this.nom, description: this.desc },
        this.categorie._id
      )
      .subscribe((res: any) => {
        console.log(res);
        this.getCategories();
        this.resetValue();
      });
  }
}
