import FormationModel from './formation.model';
import Theme from './theme.model';

export default interface Domaine {
  id: number;
  nom: string;
  themes: Theme[];
  description: Text;
}
