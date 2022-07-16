import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import Adresse from 'src/app/models/adresse.model';
import FormationModel from 'src/app/models/formation.model';
import SessionModel from 'src/app/models/session.model';
import { FormationsService } from 'src/app/services/formations.service';
import { SessionsService } from 'src/app/services/sessions.service';
// import { AdressesService } from 'src/app/services/adresses.service';

@Component({
  selector: 'app-form-create-session',
  templateUrl: './form-create-session.component.html',
  styleUrls: ['./form-create-session.component.scss'],
})
export class FormCreateSessionComponent implements OnInit {

  constructor(
    private sessionsService: SessionsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private formationsService: FormationsService
  ) {}
  subscription!: Subscription;
  formations:any ={}
  sessionForm!: FormGroup;
  session!: SessionModel;
  

  // formation!: Formation[];


  ngOnInit(): void {
    this.sessionForm = this.fb.group({
      id: [''],
      date: [''],
      formation_id: [''],
      prix: ['', [Validators.required]],
      lien: [''],
      type: [''],
      confirmation_formateur: [''],
      //adresse: [0],
    });

    // this.subscription = this.adresseService.currentAdresse.subscribe(
    //   (adresses: any) => {
    //     console.log(adresses);
    //     if (adresses.length > 0) {
    //       this.adresses = adresses;
    //     }
    //   }
    // );
    this.subscription = this.formationsService.currentFormation.subscribe(
      (formations: any) => {
        console.log(formations);
        if (formations.length > 0) {
          this.formations = formations;
        }
      }
    );

  }

  public submitForm() {
    this.session = this.sessionForm.value;
     this.session.formations = this.formations.filter(
     (f: { id: any; }) => f.id == this.sessionForm.value.formation_id
    )[0];

   console.log(this.session)
    this.sessionsService.envoiFormulaire(this.session);
  }
}
