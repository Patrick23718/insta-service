import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesArchiveComponent } from './pages/categories/categories-archive/categories-archive.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EpargnesComponent } from './pages/epargnes/epargnes.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProduitsArchiveComponent } from './pages/produits/produits-archive/produits-archive.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { UserDetailComponent } from './pages/utilisateurs/user-detail/user-detail.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { VersementsComponent } from './pages/versements/versements.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./layouts/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
