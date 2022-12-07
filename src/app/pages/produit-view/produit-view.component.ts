import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { produit } from 'src/app/models/produit.model';
import { categorie } from 'src/app/models/categorie.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.scss']
})
export class ProduitViewComponent implements OnInit {

  response : ApiResponse;
  produits : produit[];
  categories : categorie[];
  id:number
  constructor(private produitService : ProduitService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      () => {
          this.produitService.getCategories().subscribe((response : ApiResponse)=>{
            this.response = response;
            this.categories = response.data.categorie;
            this.categories
          })

        }
    )
  }

  afficherProduit(categorie : categorie){
  this.id=categorie.idCateg;
  this.categories.forEach( cat =>{
    if (cat.idCateg === this.id){
      this.produits=cat.produit
    }
  }
  )
  }


  editProduit(idProduit: number){
    this.produitService.deleteProduit(idProduit)
  }

  deleteProduit(idProduit: number){
    console.log(idProduit)
    this.produitService.deleteProduit(idProduit).subscribe((res : any)=>{

      this.produitService.getCategories().subscribe((response : ApiResponse)=>{
        this.response = response;
        this.categories = response.data.categorie;
        this.categories
      })
      console.log(res);

    })
  }

}
