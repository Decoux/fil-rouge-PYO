import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";


@Injectable
({providedIn: 'root'})

export class SessionsService{

  private formationSource = new BehaviorSubject(null);
  currentFormation = this.formationSource.asObservable();

  data = []
  sessions: any = {}
  static currentSession: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http.get('http://localhost:8080/sessions').subscribe((sessions: any) =>{

      if(sessions.length > 0){
        this.formationSource.next(sessions)
        this.data = sessions
      }
    })
   }

   detailsFormation(formation: any){
    this.formationSource.next(formation)
   }
}
