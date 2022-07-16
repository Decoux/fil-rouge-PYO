import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Theme from 'src/app/models/theme.model';
import { FormationsService } from 'src/app/services/formations.service';
@Component({
  selector: 'app-domaines-ul',
  templateUrl: './domaines-ul.component.html',
  styleUrls: ['./domaines-ul.component.scss']
})
export class DomainesUlComponent implements OnInit {
  @Input() data: any;
  regexUri: RegExp = / /g;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private router: Router, private formationsService: FormationsService) { }


  ngOnInit(): void {
    this.data.themes.sort((a: Theme,b: Theme) => b.themes.length - a.themes.length);
    
  }


  showListFormation(theme: any){
      this.router.navigate(['catalogue', 'liste-des-formations',this.data.nom.replace(this.regexUri, '-'), this.data.id, theme.nom.replace(this.regexUri, '-'), theme.id]);
      this.formationsService.changeTheme(theme);
      sessionStorage.setItem('liste-formations', JSON.stringify(theme) );
  }

}
