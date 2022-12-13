import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorie } from '../models/categorie.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private WebReqService : WebRequestService,private httpClient:HttpClient) { }
  getProduits(){
    return this.WebReqService.get('produit/list');
  }

  getProduitById(id:number){
    return this.WebReqService.get('produit/list'+id);
  }

  getCategories(){
    return this.WebReqService.get('categorie/list');
  }

  deleteProduit(id:number){
    return this.WebReqService.delete('produit/delete/'+id)
  }
  saveCategorie(categorie:categorie){
    return this.WebReqService.post('categorie/save',categorie);
  }
}
