import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService  {

    actions = [

        {
          label: 'Liste des sessions',
          value: 'liste-des-sessions'
        },
        {
          label: 'Liste des utilisateurs',
          value: 'liste-des-utilisateurs'
        },
        {
          label: 'Ajouter un domaine',
          value: 'ajouter-un-domaine'
        },
        {
          label: 'Ajouter un thème',
          value: 'ajouter-un-theme'
        },
        {
          label: 'Ajouter une formation',
          value: 'ajouter-une-formation'
        },
        {
          label: 'Ajouter une session de formation',
          value: 'ajouter-une-session'
        }
      ]

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    
   }

   public shareItems(){
        return this.actions;
   }



}
