//
// bdd
// theme
import FormationModel from "./formation.model";


export default interface Theme extends FormationModel {
  id : number;
  nom: string;
  parent_id: number;
}
