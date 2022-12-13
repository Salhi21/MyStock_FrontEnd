import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss'],
})
export class NewProduitComponent implements OnInit {
  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  prod : produit;
  ngOnInit(): void {
    this.prod = this.produitService.produit;
    console.log(this.prod);
    console.log(this.produitService.produit);

  }


  saveProduit(
    lib: string,
    prix: number,
    desc: string,
    date: string,
    categorie: number
  ) {
    let prod: any = {
      libProd: lib,
      descProd: desc,
      prix: prix,
      dateAjout: date,
      categorie: {
        idCateg: categorie,
      },
    };
    console.log(prod);

    this.produitService.saveProduit(prod).subscribe((res: any) => {
      this.router.navigate(['/produits']);
    });
  }
}
