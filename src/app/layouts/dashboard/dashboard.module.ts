import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { UtilisateursComponent } from 'src/app/pages/utilisateurs/utilisateurs.component';
import { ProduitsComponent } from 'src/app/pages/produits/produits.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { VersementsComponent } from 'src/app/pages/versements/versements.component';
import { EpargnesComponent } from 'src/app/pages/epargnes/epargnes.component';
import { UserDetailComponent } from 'src/app/pages/utilisateurs/user-detail/user-detail.component';
import { CategoriesArchiveComponent } from 'src/app/pages/categories/categories-archive/categories-archive.component';
import { ProduitsArchiveComponent } from 'src/app/pages/produits/produits-archive/produits-archive.component';
import { FormsModule } from '@angular/forms';

// import { HomeComponent } from '../pages/home/home.component';
// import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
// import { ProduitsComponent } from './pages/produits/produits.component';
// import { CategoriesComponent } from './pages/categories/categories.component';
// import { VersementsComponent } from './pages/versements/versements.component';
// import { EpargnesComponent } from './pages/epargnes/epargnes.component';
// import { UserDetailComponent } from './pages/utilisateurs/user-detail/user-detail.component';
// import { CategoriesArchiveComponent } from './pages/categories/categories-archive/categories-archive.component';
// import { ProduitsArchiveComponent } from './pages/produits/produits-archive/produits-archive.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UtilisateursComponent,
    ProduitsComponent,
    CategoriesComponent,
    VersementsComponent,
    EpargnesComponent,
    UserDetailComponent,
    CategoriesArchiveComponent,
    ProduitsArchiveComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
