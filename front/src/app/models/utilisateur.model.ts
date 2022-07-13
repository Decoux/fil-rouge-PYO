import Entreprise from "./entreprise.model";
export default interface UtilisateurModel{

  id?: number;
  nom: string;
  prenom: string;
  birthDay: string;
  entreprise: Entreprise;
  role: string;
  mail: String;
  service: number;
  adresse: number;
};
