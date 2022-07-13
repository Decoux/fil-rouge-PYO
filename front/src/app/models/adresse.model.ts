import SessionModel from "./session.model";


export default interface Adresse extends SessionModel {
  id : number;
  numero: number;
  rue: string;
  ville: string;
  codePostal : number;
  entreprise_id : number;
}
