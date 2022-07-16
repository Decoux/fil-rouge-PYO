import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';
import UtilisateurModel from 'src/app/models/utilisateur.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-liste-des-utilisateurs',
  templateUrl: './liste-des-utilisateurs.component.html',
  styleUrls: ['./liste-des-utilisateurs.component.scss']
})
export class ListeDesUtilisateursComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }
  utilisateurs!: UtilisateurModel[]; 
  subscription!: Subscription

  ngOnInit(): void {

    this.subscription = this.utilisateurService.currentUtilisateur.subscribe((utilisateurs: any) => {
      
      if(utilisateurs != null){
        this.utilisateurs = utilisateurs     
      }
    })
    
  }

}
