import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-new-fournisseur',
  templateUrl: './new-fournisseur.component.html',
  styleUrls: ['./new-fournisseur.component.scss']
})
export class NewFournisseurComponent implements OnInit {

  constructor( private forunisseurService: FournisseurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFournisseur(lib: string,adresse: string,email: string, tel: number) {
    let fournisseur: any = {
      nomFournisseur: lib,
      telFournisseur: tel,
      emailFournisseur: email,
      adresseFournisseur: adresse,
    };
    console.log(fournisseur);
    this.forunisseurService.addFournisseur(fournisseur).subscribe((res: any) => {
      this.router.navigate(['/fournisseurs']);
    });
  }


}
