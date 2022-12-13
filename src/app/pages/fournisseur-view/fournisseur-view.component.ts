import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-view',
  templateUrl: './fournisseur-view.component.html',
  styleUrls: ['./fournisseur-view.component.scss'],
})
export class FournisseurViewComponent implements OnInit {
  response: ApiResponse;
  fournisseurs: fournisseur[];

  constructor(
    private fournisseurService: FournisseurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.fournisseurService
        .getFourniseurs()
        .subscribe((response: ApiResponse) => {
          this.response = response;
          console.log(this.response);
          this.fournisseurs = response.data.fournisseur;
        });
    });
  }
  deleteForunisseur(idFournisseur: number) {
    console.log(idFournisseur);
    this.fournisseurService
      .deleteFournisseur(idFournisseur)
      .subscribe((res: any) => {
        this.fournisseurService
          .getFourniseurs()
          .subscribe((response: ApiResponse) => {
            this.response = response;
            console.log(this.response);
          });
        console.log(res);
        let index = this.fournisseurs.findIndex(
          (item) => item.idFournisseur === idFournisseur
        );

        this.fournisseurs.splice(index, 1);
      });
  }
}
