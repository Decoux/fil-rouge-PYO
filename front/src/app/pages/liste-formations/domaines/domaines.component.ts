import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
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
  @ViewChildren("listeUls") listeUls!: QueryList<ElementRef<HTMLElement>>;
  @Output() messageEvent = new EventEmitter<any>();
  regexUri: RegExp = / /g;
  
  constructor(private router: Router, private formationsService: FormationsService, private _renderer: Renderer2) { }

  ngOnInit(): void { }

  showListFormation(theme: any){
    if(theme.formations){
      this.router.navigate(['/liste-des-formations',this.data.nom.replace(this.regexUri, '-'), this.data.id, theme.nom.replace(this.regexUri, '-'), theme.id], { state: { hello: 'world' } });
      this.formationsService.changeTheme(theme);
      sessionStorage.setItem('liste-formations', JSON.stringify(theme) );
    }
  }

  showThemes(id: number, $event: any) {
   if(this.isShowThemes){
    this.isShowThemes = !this.isShowThemes
   }else {
    this.messageEvent.emit(true)
    this.isShowThemes = true
   }
  }

  showSubThemes(){
    this.isShowSubThemes = !this.isShowSubThemes;
  }

}
