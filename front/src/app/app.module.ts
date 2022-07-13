import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { RouterModule } from '@angular/router';
import { DomainesComponent } from './pages/formations-page/domaines/domaines.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';

import { CardSessionComponent } from './pages/liste-sessionsDeFormations/card-session/card-session.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { SidenavComponent } from './pages/formations-page/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormulaireInscriptionClientComponent } from './pages/formulaire-inscription-client/formulaire-inscription-client.component';
import { DomainesUlComponent } from './pages/formations-page/domaines-ul/domaines-ul.component';
import { CardProfilComponent } from './pages/utilisateurs/card-profil/card-profil.component';

import { RechercheComponent } from './pages/moteurRecherche/recherche/recherche.component';
import { FormCreateFormationComponent } from './pages/formulaire-create-formation/form-create-formation/form-create-formation.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListeDesUtilisateursComponent } from './pages/admin/liste-des-utilisateurs/liste-des-utilisateurs.component';
import { ListeDesSessionsComponent } from './pages/admin/liste-des-sessions/liste-des-sessions.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminCardsComponent } from './pages/admin/admin-cards/admin-cards.component';
import { FormationCardComponent } from './pages/formations-page/formation-card/formation-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    ListeFormationsComponent,
    DomainesComponent,
    DetailsFormationComponent,
    SidenavComponent,
    FormationsPageComponent,
    HomeFormationsComponent,
    CardSessionComponent,
    FormulaireInscriptionClientComponent,
    DomainesUlComponent,
    CardProfilComponent,
    ListeDesUtilisateursComponent,
    ListeDesSessionsComponent,
    AdminPageComponent,
    RechercheComponent,
    FormCreateFormationComponent,
    DomainesUlComponent,
    AdminCardsComponent,
    FormationCardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
