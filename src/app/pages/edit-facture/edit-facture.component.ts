import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.component.html',
  styleUrls: ['./edit-facture.component.scss']
})
export class EditFactureComponent implements OnInit {
  facture = this.factureService.facture;
  constructor( private factureService: FactureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   console.log(this.facture);

  }



}
