import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { categorie } from 'src/app/models/categorie.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  prod = this.produitService.produit;
  categorie = this.produitService.categorie;
  response : ApiResponse;
  categories : categorie[];


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
  editProduit(
    lib: string,
    prix: number,
    desc: string,
    date: string,
    categorie: number
  ) {
    let id :number;
    id =this.categories[categorie].idCateg;
    let prod: any = {
      libProd: lib,
      descProd: desc,
      prix: prix,
      dateAjout: date,
      categorie: {
        idCateg: id,
      },
    };
    console.log(prod);

    this.produitService.editProduit(prod,this.produitService.produit.idProduit).subscribe((res: any) => {
      this.router.navigate(['/produits']);
    });
  }

}
