import UtilisateurModel from "./utilisateur.model";


export default interface Service extends UtilisateurModel {
  id : number;
  nom: string;
  mail: string;
  telephone: number;
}
