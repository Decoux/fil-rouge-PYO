import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListeFormationsComponent } from './pages/formations-page/liste-formations/liste-formations.component';
import { DetailsFormationComponent } from './pages/formations-page/details-formation/details-formation.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { HomeFormationsComponent } from './pages/formations-page/home-formations/home-formations.component';
import { FormulaireInscriptionClientComponent } from './pages/formulaire-inscription-client/formulaire-inscription-client.component';
import { RechercheComponent } from './pages/moteurRecherche/recherche/recherche.component';
import { FormCreateFormationComponent } from './pages/formulaire-create-formation/form-create-formation/form-create-formation.component';
import { SidenavComponent } from './pages/formations-page/sidenav/sidenav.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { ListeDesSessionsComponent } from './pages/admin/liste-des-sessions/liste-des-sessions.component';
import { ListeDesUtilisateursComponent } from './pages/admin/liste-des-utilisateurs/liste-des-utilisateurs.component';
import { AdminCardsComponent } from './pages/admin/admin-cards/admin-cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPageComponent,
    children: [
      { path: '', component: AdminCardsComponent },
      { path: 'liste-des-sessions', component: ListeDesSessionsComponent },
      { path: 'liste-des-utilisateur', component: ListeDesUtilisateursComponent },
      { path: 'ajouter-une-formation', component: FormCreateFormationComponent },
    ]
  },


{ path: 'recherche', component: RechercheComponent },
{ path: 'formCreerFormation', component: FormCreateFormationComponent },
  { path: 'inscription-client', component: FormulaireInscriptionClientComponent},
  { path: 'admin', component: AdminPageComponent,
    children: [
      { path: 'liste-des-sessions', component: ListeDesSessionsComponent},
      { path: 'liste-des-utilisateurs', component: ListeDesUtilisateursComponent},
    ]
  },

  {
    path: 'catalogue',
    component: FormationsPageComponent,
    children: [
      { path: '', component: HomeFormationsComponent },

      {
        path: 'liste-des-formations',
        component: SidenavComponent,
        children: [
          { path: ':domaine/:domaine_id/:theme/:theme_id', component: ListeFormationsComponent},
          { path: ':domaine/:domaine_id/:theme/:id/:formation/:formation_id', component: DetailsFormationComponent },
          { path: ':domaine/:domaine_id/:theme/:id/:formation/:formation_id/inscription-client', component: DetailsFormationComponent,
            children: [
              { path: '', component: FormulaireInscriptionClientComponent}
            ]
          }
        ]
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
