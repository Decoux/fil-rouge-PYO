import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesPageComponent } from './pages/liste-formations/themes-page/themes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations/liste-formations.component';
import { RouterModule } from '@angular/router';
import { DomainesComponent } from './pages/liste-formations/domaines/domaines.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { DetailsFormationComponent } from './pages/liste-formations/details-formation/details-formation.component';
import { SidenavComponent } from './_commons/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
// import { BreadcrumbComponent } from './pages/liste-formations/breadcrumb/breadcrumb.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ThemesPageComponent,
    ListeFormationsComponent,
    DomainesComponent,
    DetailsFormationComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
