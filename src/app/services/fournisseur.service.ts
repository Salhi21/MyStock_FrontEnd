import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  constructor(
    private WebReqService: WebRequestService,
    private httpClient: HttpClient
  ) {}
  getFourniseurs() {
    return this.WebReqService.get('fournisseur/list');
  }
  addFournisseur(fournisseur: any) {
    return this.WebReqService.post('fournisseur/add', fournisseur);
  }
  deleteFournisseur(idFournisseur: number) {
    return this.WebReqService.delete(`fournisseur/delete/${idFournisseur}`);
  }
  editFourunisseur(idFournisseur: number, fournisseur: any) {
    return this.WebReqService.put(
      `fournisseur/edit/${idFournisseur}`,
      fournisseur
    );
  }
}
