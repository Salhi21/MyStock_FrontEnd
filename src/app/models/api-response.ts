import { categorie } from "./categorie.model";
import { fournisseur } from "./fournisseur.model";
import { produit } from "./produit.model";

export class ApiResponse {
  timeStamp: string;
  statusCode: number;
  status: string;
  message: string;
  data: {
    produits : produit[];
    categorie : categorie[];
    fournisseur : fournisseur[];

  };
}
