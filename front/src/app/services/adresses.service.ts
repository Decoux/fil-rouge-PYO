import { HttpClient } from "@angular/common/http";
import { Injectable , OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";



interface formations{
  id: string;
  nom: number;
  sessions: []
}

@Injectable({
  providedIn: 'root'
})
export class AdressesService  {

  private formationSource = new BehaviorSubject(null);
  currentFormation = this.formationSource.asObservable();

  private sessionSource = new BehaviorSubject(null);
  currentSession = this.sessionSource.asObservable();

  private adresseSource =new BehaviorSubject(null);
  currentAdresse= this.adresseSource.asObservable();

  data = []
  sessions: any = {}
  urlApi="http://localhost:8080"
  // currentAdresses: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8080/adresses').subscribe((formations: any) =>{
      if(formations.length > 0){
        this.formationSource.next(formations)
        this.data = formations

      }
    })
   }

   changeSession(session: any){
    this.sessionSource.next(session)
   }

   detailsAdresse(adresse: any){
    this.adresseSource.next(adresse)
   }

   envoiFormulaire(adresse: any){
    this.http.post(this.urlApi+"/adresses/ajoutAdresse", adresse).subscribe();
    console.log(adresse)
   }

}
