import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PersonasComponent } from './personas/personas.component';
import { RolesComponent } from './roles/roles.component';
import { TutoriasComponent } from './tutorias/tutorias.component';


const routes: Routes = [
  {  path: '', component: LoginComponent},
  {  path: 'cursos', component: CursosComponent},
  {  path: 'personas', component: PersonasComponent},
  {  path: 'roles', component: RolesComponent},
  {  path: 'tutorias', component: TutoriasComponent},
  {  path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
