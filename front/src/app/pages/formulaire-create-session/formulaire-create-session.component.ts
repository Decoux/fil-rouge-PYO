import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import UtilisateurModel from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';
import { FormationsService } from 'src/app/services/formations.service';
import { SessionsService } from 'src/app/services/sessions.service';
@Component({
  selector: 'app-formulaire-create-session',
  templateUrl: './formulaire-create-session.component.html',
  styleUrls: ['./formulaire-create-session.component.scss']
})
export class FormulaireCreateSessionComponent implements OnInit {
  sessionForm!: FormGroup
  formateurs: UtilisateurModel[] = []
  formations: any = []

  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService, private formationsService: FormationsService, private sessionsService: SessionsService) { }

  ngOnInit(): void {
    this.sessionForm = this.fb.group({
      formation: ['', Validators.required],
      lieu: ['', Validators.required],
      date: ['', Validators.required],
      lien: ['', Validators.required],
      type: ['', Validators.required],
      confirmation_formateur: [''],
    })

    this.utilisateurService.getByRole(1).subscribe(users => {
      this.formateurs = users
    })

    this.formationsService.getFormations().subscribe(formations => {
      this.formations = formations
    })
  }

  public submit(){
    this.sessionsService.ajouterUneNouvelleSession(this.sessionForm.value)
    this.sessionForm.reset();
  }

}
