import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { facture } from '../models/facture-model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  facture:facture

  constructor(private WebReqService : WebRequestService,private httpClient:HttpClient) { }
  getFactures(){
    return this.WebReqService.get('facture/list');
  }
  editFacture(facture:any,id:number){
    return this.WebReqService.put('facture/update/'+id,facture);
  }
  deleteFacture(id:number){
    return this.WebReqService.delete('facture/delete/'+id);
  }
  saveFacture(facture:any){
    return this.WebReqService.post('facture/save',facture);
  }

}
