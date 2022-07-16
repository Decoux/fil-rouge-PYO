
//  bdd

import Theme from "./theme.model";

// pour formation
export default interface FormationModel{
  [x: string]: any;
  themes: Theme;
  id: number;
  nom:string;
  description:string;
  prix: number;
  theme: Theme [];
};
