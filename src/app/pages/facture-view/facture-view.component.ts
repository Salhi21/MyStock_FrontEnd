import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { facture } from 'src/app/models/facture-model';
import { FactureService } from 'src/app/services/facture.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-facture-view',
  templateUrl: './facture-view.component.html',
  styleUrls: ['./facture-view.component.scss']
})
export class FactureViewComponent implements OnInit {
  response: ApiResponse;
  factures : facture[];
  fournisseur = this.fournisseurService.fournisseur;


  constructor( private factureService: FactureService,
    private route: ActivatedRoute,
    private router: Router,
    private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.factureService
        .getFactures()
        .subscribe((response: ApiResponse) => {
          this.response = response;
         this.factures = response.data.facture;
         console.log(this.factures);
         this.factures = this.factures.filter(facture => facture.fournisseur == this.fournisseur.idFournisseur);
        });

    });
  }
  deleteFacture(idFacture: number) {
    console.log(idFacture);
    this.factureService
      .deleteFacture(idFacture)
      .subscribe((res: any) => {
        this.factureService
          .getFactures()
          .subscribe((response: ApiResponse) => {
            this.response = response;
            console.log(this.response);
          });
        console.log(res);
        let index = this.factures.findIndex(
          (item) => item.fact_Achat === idFacture
        );

        this.factures.splice(index, 1);
      });
  }

  editFacture(facture: facture) {
    this.factureService.facture = facture;
    console.log(facture);

    this.router.navigate(['/edit-facture']);
  }

}
