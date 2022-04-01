import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/interfaces/produit';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
  constructor(
    private categyService: CategorieService,
    private produitService: ProduitsService
  ) {}
  id: string = '';
  nom: string = '';
  desc: string = '';
  search: string = '';
  categorie: any = '';
  prix: number = 0;
  produits: Produit[] = [];

  ngOnInit(): void {
    this.getCategories();
    this.getAllProduct();
  }
  headers = ['Nom', 'Description', 'Montant', 'Categorie', 'Actions'];

  getCategories() {
    this.categyService.getAllCategories(this.search).subscribe((res: any) => {
      this.items = res;
      console.log(res);
    });
  }

  setItem(data: Produit) {
    this.id = data._id || '';
    this.categorie = data.category._id;
    this.nom = data.nom;
    this.desc = data.description || '';
    this.prix = data.prix;
  }

  ModifierProduit() {
    const produit: Produit = {
      nom: this.nom,
      category: this.categorie,
      prix: this.prix,
      description: this.desc,
    };
    this.produitService.updateProduit(this.id, produit).subscribe((res) => {
      this.resetValue();
      this.search = '';
      this.getAllProduct();
    });
  }

  getAllProduct() {
    this.produitService
      .getAllProduct('', this.search, false)
      .subscribe((res: Produit[]) => {
        this.produits = res;
        console.log(this.produits);
      });
  }

  items: any[] = [];

  AjoutProduit() {
    const produit: Produit = {
      nom: this.nom,
      category: this.categorie,
      prix: this.prix,
      description: this.desc,
    };
    this.produitService.addProduct(produit).subscribe((res: any) => {
      console.log(res);
      this.getAllProduct();
      this.resetValue();
    });
    // console.log(produit);
  }

  resetValue() {
    this.nom = '';
    this.desc = '';
    this.search = '';
    this.prix = 0;
    this.categorie = '';
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
