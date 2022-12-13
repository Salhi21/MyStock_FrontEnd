import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fournisseur } from '../models/fournisseur.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  fournisseur: fournisseur;
  constructor(
    private WebReqService: WebRequestService,
  ) {}
  getFourniseurs() {
    return this.WebReqService.get('fournisseur/list');
  }
  addFournisseur(fournisseur: any) {
    return this.WebReqService.post('fournisseur/save', fournisseur);
  }
  deleteFournisseur(idFournisseur: number) {
    return this.WebReqService.delete('fournisseur/delete/'+idFournisseur);
  }
  editFournisseur(fournisseur: fournisseur, idFournisseur: number) {
    return this.WebReqService.put(
      `fournisseur/update/${idFournisseur}`,
      fournisseur
    );
  }
}
