import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import Theme from 'src/app/models/theme.model';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.scss']
})
export class DomainesComponent implements OnInit {
  
  protected isShowThemes: boolean = false;
  protected isShowSubThemes: boolean = false;
  @Input() data: any;
  @ViewChildren("listeSousthemes") listeSousthemes!: QueryList<any>;
  // @ViewChildren("listeElem") listeElem!: QueryList<ElementRef<HTMLElement>>;
  @Output() messageEvent = new EventEmitter<any>();
  regexUri: RegExp = / /g;
  
  constructor(private router: Router, private formationsService: FormationsService, private _renderer: Renderer2) { }

  ngOnInit(): void {}

  showListFormation(theme: any){
    
    if(theme.formation.length > 0){
      
      this.router.navigate(['/catalogue', 'liste-des-formations', this.data.nom.replace(this.regexUri, '-'), this.data.id, theme.nom.replace(this.regexUri, '-'), theme.id]);
      this.formationsService.changeTheme(theme);
      sessionStorage.setItem('liste-formations', JSON.stringify(theme) );
    
      
    }
  }

  showThemes() {
    this.isShowThemes = !this.isShowThemes
  }

  showSubThemes($event: Event){ }



  onClick($event: any){
    for (const i of this.listeSousthemes) {
      i.isShowSubThemes = false
      i.isShowSubThemes = false
    }
  }

}
