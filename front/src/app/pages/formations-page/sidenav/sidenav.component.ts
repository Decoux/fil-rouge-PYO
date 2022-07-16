import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormationsService } from 'src/app/services/formations.service';
import { DomainesComponent } from 'src/app/pages/formations-page/sidenav/domaines/domaines.component';
import Domaine from 'src/app/models/domaine.model';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  subscription!: Subscription;
  domaines: any = []
  message: any;
  @ViewChildren("listeUls") listeUls!: QueryList<any>;
  @ViewChild(DomainesComponent) child: any;

  constructor(private formationsService: FormationsService, private _renderer: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
    this.subscription = this.formationsService.currentDomaines.subscribe((message: any) => {
      if(message.length){

        message.forEach((val: Domaine) => this.domaines.push(Object.assign({}, val)));
        console.log(this.domaines);



        

        // this.domaines.structuredClone(message);
        // console.log(this.domaines);
        
        for (let index = 0; index < this.domaines.length; index++) {
          const domaine = this.domaines[index];
          // console.log("domaine");
          // console.log(domaine);

          for (let index = 0; index < domaine.themes.length; index++) {
            const theme = domaine.themes[index];
            // console.log("theme");
            // console.log(theme);
            let parent = Object.assign({}, theme)
            delete parent.themes
            delete theme.formation
            theme.themes.unshift(parent)
          
        
            

   
  
        
          }
          
        }
        // console.log(this.domaines);

      //   for (let index = 0; index < this.domaines.length; index++) {
      //     const domaine = this.domaines[index];
      //     for (let index = 0; index < domaine.themes.length; index++) {
      //       const theme = domaine.themes[index];
      //       console.log(theme.themes[0]);
            
      //       // theme.themes[0].themes = []
      //     }
      //   }
       }
       console.log(this.domaines);

    })
  }

  onClick($event: any){
      for (const i of this.listeUls) {
        i.isShowThemes = false
        i.isShowSubThemes = false
      }
    }
}
