import { HttpClient } from "@angular/common/http";
import { Injectable , OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { BehaviorSubject } from "rxjs";



@Injectable
({providedIn: 'root'})

export class SessionsService{

  private formationSource = new BehaviorSubject(null);
  currentFormation = this.formationSource.asObservable();

  private sessionSource = new BehaviorSubject(null);
  currentSession = this.formationSource.asObservable();

  data = []
  formation!:any
  sessions!: any
  urlApi="http://localhost:8080";
  // sessions: any = {}
  // static currentSession: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8080/sessions').subscribe((sessions: any) =>{

  // constructor(
  //   private http: HttpClient,
  //   private activatedRoute: ActivatedRoute,
  //   private router: Router)
  //   {
  //   this.http.get('http://localhost:8080/adresses').subscribe((sessions: any) =>{
      if(sessions.length > 0){
        this.sessionSource.next(sessions)
        this.data = sessions

      }
    })
   }

   changeSession(session: any){
    this.formationSource.next(session)
   }

   detailsSession(session: any){
    this.sessionSource.next(session)
   }

   envoiFormulaire(session: any){
    this.http.post(this.urlApi+"/sessions/ajoutSession", session).subscribe();
    console.log(session)
   }
}



