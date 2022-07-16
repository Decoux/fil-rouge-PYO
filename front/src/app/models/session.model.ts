import FormationModel from 'src/app/models/formation.model';
import Adresse from "./adresse.model";


export default interface SessionModel{

formations: FormationModel;
  id:number;
  date: Date;
  formation_id: number;
  prix:number;
  lien:string;
  type: string;
  confirmation_formateur: boolean;
  // adresse_id: number;
  // formation : Formation[];

};
