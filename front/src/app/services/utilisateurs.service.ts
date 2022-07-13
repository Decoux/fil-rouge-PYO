import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
// Interface
import  UtilisateurModel from '../models/utilisateur.model'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService  {


  private utilisateurSource = new BehaviorSubject(null);
  currentUtilisateur = this.utilisateurSource.asObservable();

    constructor(private httpClient: HttpClient){ 
        this.httpClient.get('http://localhost:8080/utilisateurs').subscribe((utilisateurs: any) =>{
            if(utilisateurs != null && utilisateurs.length > 0){
                this.utilisateurSource.next(utilisateurs)
            }
        })    
    }



    public inscriptionUtilisateur(user: UtilisateurModel){
        user.entreprise = { 
            nom:'entreprise 101'
        }
        this.httpClient.post('http://localhost:8080/utilisateurs/ajout', user).subscribe()
    }


}