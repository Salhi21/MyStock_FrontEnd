import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.scss']
})
export class EditFournisseurComponent implements OnInit {

  constructor( private fournisseurService: FournisseurService,
    private router: Router) { }
    fournisseur = this.fournisseurService.fournisseur;

  ngOnInit(): void {
  }

  editfournisseur(lib: string,adresse: string,email: string, tel: number) {
    let fournisseur: any = {
      nomFournisseur: lib,
      telFournisseur: tel,
      emailFournisseur: email,
      adresseFournisseur: adresse,
    };
    console.log(fournisseur);
    this.fournisseurService.editFournisseur(fournisseur,this.fournisseurService.fournisseur.idFournisseur).subscribe((res: any) => {
      this.router.navigate(['/fournisseurs']);
    });
  }

}
