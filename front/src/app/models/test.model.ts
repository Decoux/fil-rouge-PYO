import SessionModel from "./session.model";


export default interface Test extends SessionModel {
  id : number;
  lien: string;
  note: number;
  session_id: number;
}
