import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrls: ['./card-session.component.scss'],
})
export class CardSessionComponent implements OnInit {
  sessionService!: typeof SessionsService;

  constructor(private sessionsService: SessionsService) {}

  subscription?: Subscription;
  formations: any;
  description= "Le lorem ipsum est, en imprimerie, une suite de mouite de mots sans signification utilisée à titre provisoire pour calibrer une  mise en page, le texte définitif veuite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif veuite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif veuite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif veuite de mots sans signification utilisée à  titre provisoire pour calibrer une mise en page, le texte définitif veuite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif vets sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."
  @Input()
  dataSession: any;

  ngOnInit(): void {}
}
