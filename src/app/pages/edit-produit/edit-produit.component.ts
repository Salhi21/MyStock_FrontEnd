import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  ngOnInit(): void {
  console.log(this.produitService.produit);


  }
  editProduit(
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
