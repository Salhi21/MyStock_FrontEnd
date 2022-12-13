import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { categorie } from 'src/app/models/categorie.model';
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
  response : ApiResponse;
  categories: categorie[];
  ngOnInit(): void {
    this.prod = this.produitService.produit;
    console.log(this.prod);
    this.route.params.subscribe(() => {
      this.produitService.getCategories().subscribe((response: ApiResponse) => {
        this.response = response;
        this.categories = response.data.categorie;
      });
    });
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
