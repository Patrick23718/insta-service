import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './pages/page404/page404.component';
import { HomeComponent } from './pages/home/home.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { VersementsComponent } from './pages/versements/versements.component';
import { EpargnesComponent } from './pages/epargnes/epargnes.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './pages/utilisateurs/user-detail/user-detail.component';
import { CategoriesArchiveComponent } from './pages/categories/categories-archive/categories-archive.component';
import { ProduitsArchiveComponent } from './pages/produits/produits-archive/produits-archive.component';
import { AuthComponent } from './layouts/auth/auth.component';
// import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, Page404Component, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
