import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/shared/interfaces/categorie';
import { Epargne } from 'src/app/shared/interfaces/epargne';
import { Produit } from 'src/app/shared/interfaces/produit';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { EpargneService } from 'src/app/shared/services/epargne.service';
import { ProduitsService } from 'src/app/shared/services/produits.service';
import { UtilisateursService } from 'src/app/shared/services/utilisateurs.service';
import { VersementService } from 'src/app/shared/services/versement.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  server = environment.serverURL;
  modePaiement: string = '';
  montant: number = 0;
  uid: string = '';
  user: any = {};
  categories: Categorie[] = [];
  produits: Produit[] = [];
  categorie: string = '';
  date: Date = new Date(Date.now());
  produit = '';
  frequence = '';
  epargnes: Epargne[] = [];
  epargne!: Epargne;
  verserments: any;
  constructor(
    private router: ActivatedRoute,
    private categoryService: CategorieService,
    private productService: ProduitsService,
    private epargneService: EpargneService,
    private userService: UtilisateursService,
    private versementService: VersementService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.uid = params.uid;
      console.log(this.uid);
      this.userService.getuser(this.uid).subscribe(
        (res) => {
          console.log(res);
          this.user = res;
        },
        (err) => {
          console.warn(err.status);
        }
      );
      this.getEpargne();
    });
    this.categoryService.getAllCategories().subscribe((res: Categorie[]) => {
      this.categories = res;
      this.categorie = this.categories[0]._id || '';
      this.getProductFromCategory();
    });
  }

  getEpargne() {
    this.epargneService.getUserEpargne(this.uid).subscribe((res) => {
      this.epargnes = res;
      console.log(this.epargnes);
    });
  }

  getProductFromCategory(e: any = null) {
    this.productService
      .getAllProductFromCategory(this.categorie)
      .subscribe((res: Produit[]) => {
        this.produits = res;
        this.produit = '';
      });
  }

  AjouterEpargne() {
    const epargne = {
      client: this.uid,
      produit: this.produit,
      echeance: this.date,
      frequence: this.frequence,
    };
    this.epargneService.addEpargne(epargne).subscribe((res) => {
      this.getEpargne();
    });
  }

  Verser() {
    const data = {
      epargne: this.epargne._id,
      montant: this.montant,
      mode: this.modePaiement,
    };
    console.log(data);
    this.versementService.addVersement(data).subscribe((res) => {
      this.getVersement(this.epargne);
    });
  }

  getVersement(epargne: any) {
    this.epargne = epargne;

    this.versementService
      .getUserVersement(this.epargne._id || '', this.uid)
      .subscribe((res) => {
        this.verserments = res;
        console.log(this.verserments);
      });
  }
}
