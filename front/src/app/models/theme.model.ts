//
// bdd
// theme
import FormationModel from "./formation.model";

export default interface Theme {
  id : number;
  nom: string;
  formation: Array<FormationModel>;
  themes: Array<Theme>;
  parent_id: number;
}
