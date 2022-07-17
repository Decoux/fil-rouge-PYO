import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Domaine from 'src/app/models/domaine.model';
import Theme from 'src/app/models/theme.model';
import { DomaineService } from 'src/app/services/domaine.service';
import { ThemesService } from 'src/app/services/themes.service';
@Component({
  selector: 'app-formulaire-create-theme',
  templateUrl: './formulaire-create-theme.component.html',
  styleUrls: ['./formulaire-create-theme.component.scss']
})
export class FormulaireCreateThemeComponent implements OnInit {
  domaines: Domaine[] = []
  themes: Theme[] = []
  subscription!: Subscription
  themeForm!: FormGroup
  constructor(private domaineService: DomaineService, private themesService: ThemesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.themeForm = this.fb.group({
      nom: ["", Validators.required],
      parent_id: ["", Validators.required],
      domaine: ["", Validators.required],
    })

    this.domaineService.getAll().subscribe((domaines: any) => {
      this.domaines = domaines
    })

    this.subscription= this.themesService.currentThemes.subscribe((themes : any) =>{
      if(themes.length >0){
        this.themes= themes;
      }
    })
  }

  public submit(){
    delete this.themeForm.value.domaine.themes
    this.themesService.ajouterUnTheme(this.themeForm.value);
    this.themeForm.reset();
  }

}
