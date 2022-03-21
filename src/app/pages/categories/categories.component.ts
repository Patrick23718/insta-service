import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/shared/interfaces/categorie';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categyService: CategorieService) {}
  // nom: string = '';
  // desc: string = '';
  search: string = '';
  // categorie: any = {};
  categorie: Categorie = {
    nom: '',
    description: '',
  };

  ngOnInit(): void {
    this.getCategories();
  }
  headers = ['#', 'Titre', 'Description', 'Date', 'Actions'];

  getCategories() {
    this.categyService.getAllCategories(this.search).subscribe((res: any) => {
      this.items = res;
      console.log(res);
    });
  }

  items: any[] = [];

  AjoutCategorie() {
    this.categyService
      .addCategory(this.categorie?.nom, this.categorie.description)
      .subscribe((res: any) => {
        console.log(res);
        this.getCategories();
        this.resetValue();
      });
  }

  resetValue() {
    this.categorie.nom = '';
    this.categorie.description = '';
    this.search = '';
  }

  ModifierCategorie() {
    this.categyService
      .editCategorie(
        {
          nom: this.categorie?.nom,
          description: this.categorie.description,
        },
        this.categorie?._id!
      )
      .subscribe((res: any) => {
        console.log(res);
        this.getCategories();
        this.resetValue();
      });
  }

  ArchiveCategorie(item: Categorie) {
    this.categorie = item;
    this.categyService
      .archiveCategorie(item._id || '')
      .subscribe((res: any) => {
        console.log(res);
        this.getCategories();
      });
  }
}
