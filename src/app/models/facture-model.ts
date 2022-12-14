import { fournisseur } from "./fournisseur.model";
import { produit } from "./produit.model";

export class facture {
  fact_Achat: number;
  date: Date;
  totalHT: number;
  total_TVA: number;
  total_TTC: number;
  fournisseur: number;
  produits : produit[]
}
