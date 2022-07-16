import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import FormationModel from 'src/app/models/formation.model';
import SessionModel from 'src/app/models/session.model';
import Theme from 'src/app/models/theme.model';
import { FormationsService } from 'src/app/services/formations.service';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-form-create-formation',
  templateUrl: './form-create-formation.component.html',
  styleUrls: ['./form-create-formation.component.scss'],
})
export class FormCreateFormationComponent implements OnInit {
  sessionService: any;

  constructor(
    private formationsService: FormationsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private themesService: ThemesService
  ) {}

  formationForm!: FormGroup;
  formation!: FormationModel;
  session!: SessionModel;
  themes!: Theme[];
  subscription!: Subscription;
  ngOnInit(): void {
    //this.formationsService.getAll();
    this.formationForm = this.fb.group({
      id: [''],
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      themes: [0],
      personnalise: false,
    });

    this.subscription = this.themesService.currentThemes.subscribe(
      (themes: any) => {
        console.log(themes);
        if (themes.length > 0) {
          this.themes = themes;
        }
      }
    );
  }

  public submitForm() {
    this.formation = this.formationForm.value;
    this.formation.themes = this.themes.filter(
      (t) => t.id == this.formationForm.value.theme
    )[0];
    ///console.log(this.formation)
    this.formationsService.envoiFormulaire(this.formation);
  }
}
