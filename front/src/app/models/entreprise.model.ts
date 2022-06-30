import UtilisateurModel from "./utilisateur.model";


export default interface Entreprise extends UtilisateurModel {
  id : number;
  nom: string;
  adresse_id: number;
}
