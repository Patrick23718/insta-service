import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/shared/interfaces/categorie';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-categories-archive',
  templateUrl: './categories-archive.component.html',
  styleUrls: ['./categories-archive.component.scss'],
})
export class CategoriesArchiveComponent implements OnInit {
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
    this.categyService
      .getAllCategories(this.search, true)
      .subscribe((res: any) => {
        this.items = res;
        console.log(res);
      });
  }

  items: any[] = [];

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
      .archiveCategorie(item._id || '', false)
      .subscribe((res: any) => {
        console.log(res);
        this.getCategories();
      });
  }
}
