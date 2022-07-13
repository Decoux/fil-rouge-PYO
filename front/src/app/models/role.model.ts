import UtilisateurModel from "./utilisateur.model";


export default interface Role extends UtilisateurModel {
  id : number;
  nom: string;
}
