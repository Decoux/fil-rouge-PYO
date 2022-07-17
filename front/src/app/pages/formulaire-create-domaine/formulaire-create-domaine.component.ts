import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomaineService } from 'src/app/services/domaine.service';
@Component({
  selector: 'app-formulaire-create-domaine',
  templateUrl: './formulaire-create-domaine.component.html',
  styleUrls: ['./formulaire-create-domaine.component.scss']
})
export class FormulaireCreateDomaineComponent implements OnInit {

  domaineForm!: FormGroup;
  constructor(private fb: FormBuilder, private domaineService: DomaineService) { }

  ngOnInit(): void {
    this.domaineForm = this.fb.group({
      nom: ['', Validators.required]
    })
  }

  
  public submit(){
    this.domaineService.ajouterUnDomaine(this.domaineForm.value)
    this.domaineForm.reset();
  }

}
