import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Theme from 'src/app/models/theme.model';
import { Router } from '@angular/router';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-sous-theme',
  templateUrl: './sous-theme.component.html',
  styleUrls: ['./sous-theme.component.scss'],
  providers: [FormationsService]
})
export class SousThemeComponent implements OnInit {
  @Input() theme!: Theme;
  protected isShowThemes: boolean = false;

  regexUri: RegExp = / /g;

  constructor(private router: Router, private formationsService: FormationsService) { }

    ngOnInit(): void { }

    showThemes(theme: any) {
        this.isShowThemes = !this.isShowThemes
        if(theme.formation){
          this.router.navigate(['/catalogue', 'liste-des-formations', this.theme.nom.replace(this.regexUri, '-'), this.theme.id, theme.nom.replace(this.regexUri, '-'), theme.id]);
        }
    }

    showListFormation(theme: any){
        if(theme.formation.length > 0){
          this.router.navigate(['/catalogue', 'liste-des-formations', this.theme.nom.replace(this.regexUri, '-'), this.theme.id, theme.nom.replace(this.regexUri, '-'), theme.id]);
          this.formationsService.changeTheme(theme);
          sessionStorage.setItem('liste-formations', JSON.stringify(theme) );
        }
    }
  }






