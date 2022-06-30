import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.scss']
})
export class ListeFormationsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private formationsService: FormationsService) {
    
   }
  txt: string = "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
  subscription!: Subscription;
  domaines: any = {}
  theme!: any
  regexUri: RegExp = / /g


  ngOnInit(): void {

    this.subscription = this.formationsService.currentTheme.subscribe((theme: any) => {
      if(theme){
        this.theme = theme
      }
    })

    if(sessionStorage.getItem('liste-formations')){
      this.theme = sessionStorage.getItem('liste-formations')
      this.theme = JSON.parse(this.theme)
    }
  }
  
  showDetailsFormation(formation: any){
    this.formationsService.detailsFormation(formation);
    this.router.navigate([this.router.url, formation.nom.replace(this.regexUri, '-'), formation.id])
    sessionStorage.setItem("details-formation",  JSON.stringify(formation))
  }

}
