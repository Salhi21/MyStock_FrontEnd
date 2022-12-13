import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProduitViewComponent } from './pages/produit-view/produit-view.component';
import { NewProduitComponent } from './pages/new-produit/new-produit.component';
import { NewFournisseurComponent } from './pages/new-fournisseur/new-fournisseur.component';
import { FournisseurViewComponent } from './pages/fournisseur-view/fournisseur-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';
import { EditFournisseurComponent } from './pages/edit-fournisseur/edit-fournisseur.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ProduitViewComponent,
    NewProduitComponent,
    NewFournisseurComponent,
    FournisseurViewComponent,
    NewCategoryComponent,
    EditProduitComponent,
    EditFournisseurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
