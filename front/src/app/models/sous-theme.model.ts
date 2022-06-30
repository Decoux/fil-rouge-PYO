import ThemeModel from "./theme.model";


export default interface SousTheme extends ThemeModel {
  id : number;
  nom: string;
  parent_id: number;
}
