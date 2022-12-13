import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveCategorie(lib : string) {
    let cat : any = {
      libCateg : lib
    }
    this.produitService.saveCategorie(cat).subscribe((res: any) => {
      this.router.navigate(['/produits']);
    });
  }
}
