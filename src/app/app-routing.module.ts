import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';
import { FournisseurViewComponent } from './pages/fournisseur-view/fournisseur-view.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { NewFournisseurComponent } from './pages/new-fournisseur/new-fournisseur.component';
import { NewProduitComponent } from './pages/new-produit/new-produit.component';
import { ProduitViewComponent } from './pages/produit-view/produit-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component : HomePageComponent},
   {path:'produits',component : ProduitViewComponent},
   {path:'fournisseurs',component : FournisseurViewComponent},
   {path:'new-produit',component : NewProduitComponent},
   {path:'edit-produit',component : EditProduitComponent},
   {path:'new-forunisseur',component : NewFournisseurComponent},
   {path:'new-category',component : NewCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
