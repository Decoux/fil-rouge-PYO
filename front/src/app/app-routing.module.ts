import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesPageComponent } from './pages/themes-page/themes-page.component';

const routes: Routes = [
  {path: "liste-des-themes", component: ThemesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
