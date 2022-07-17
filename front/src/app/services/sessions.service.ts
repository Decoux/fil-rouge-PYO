import { HttpClient } from "@angular/common/http";
import { Injectable , OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";



@Injectable
({providedIn: 'root'})

export class SessionsService{

  private formationsSource = new BehaviorSubject(null);
  currentFormation = this.formationsSource.asObservable();

  private sessionsSource = new BehaviorSubject(null);
  currentSession = this.sessionsSource.asObservable();

  data = []
  formation!:any
  sessions!: any
  urlApi="http://localhost:8080";
  // sessions: any = {}


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8080/sessions').subscribe((sessions: any) =>{

  // constructor(
  //   private http: HttpClient,
  //   private activatedRoute: ActivatedRoute,
  //   private router: Router)
  //   {
  //   this.http.get('http://localhost:8080/adresses').subscribe((sessions: any) =>{
      if(sessions.length > 0){
        this.sessionsSource.next(sessions)
        this.data = sessions

      }
    })
   }

   changeSession(session: any){
    this.sessionsSource.next(session)
   }

   detailsSession(session: any){
    this.sessionsSource.next(session)
   }

   envoiFormulaire(session: any){
    this.http.post(this.urlApi+"/sessions/ajoutSession", session).subscribe((data: any) =>{
      if(data!){
       this.sessionsSource.next(data)
      }
    });
    console.log(session)
   }
}



