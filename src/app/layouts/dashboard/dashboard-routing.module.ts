import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutUtilisateurComponent } from 'src/app/pages/ajout-utilisateur/ajout-utilisateur.component';
import { CategoriesArchiveComponent } from 'src/app/pages/categories/categories-archive/categories-archive.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { EpargnesComponent } from 'src/app/pages/epargnes/epargnes.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProduitsArchiveComponent } from 'src/app/pages/produits/produits-archive/produits-archive.component';
import { ProduitsComponent } from 'src/app/pages/produits/produits.component';
import { UserDetailComponent } from 'src/app/pages/utilisateurs/user-detail/user-detail.component';
import { UtilisateursComponent } from 'src/app/pages/utilisateurs/utilisateurs.component';
import { VersementsComponent } from 'src/app/pages/versements/versements.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',

    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'utilisateurs',
        children: [
          { path: '', component: UtilisateursComponent },
          {
            path: 'ajout',
            component: AjoutUtilisateurComponent,
          },
          { path: ':uid', component: UserDetailComponent },
        ],
      },
      {
        path: 'categories',
        children: [
          { path: '', component: CategoriesComponent },
          { path: 'archive', component: CategoriesArchiveComponent },
        ],
      },
      {
        path: 'produits',
        children: [
          { path: '', component: ProduitsComponent },
          { path: 'archive', component: ProduitsArchiveComponent },
        ],
      },
      {
        path: 'epargnes',
        children: [{ path: '', component: EpargnesComponent }],
      },
      {
        path: 'versements',
        children: [{ path: '', component: VersementsComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
