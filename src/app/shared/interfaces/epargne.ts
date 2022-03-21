import { Produit } from './produit';

export interface Epargne {
  _id?: string;

  client: object;

  produit: Produit;

  echeance: Date;

  montant?: number;

  status?: string;

  frequence?: string;

  createdAt?: Date;

  updatedAt?: Date;

  __v?: number;
}
