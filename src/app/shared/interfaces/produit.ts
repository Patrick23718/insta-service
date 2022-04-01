import { Categorie } from './categorie';

export interface Produit {
  _id?: string;
  nom: string;
  isDelete?: boolean;
  prix: number;
  category: Categorie;
  description?: string;
  img?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
