import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaComponentComponent } from './aula/aula-component/aula-component.component';
import { AulaFormComponent } from './aula/aula-form/aula-form.component';
import { HorarioFormComponent } from './horario/horario-form/horario-form.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { ProfessorCadastroComponent } from './professor/professor-cadastro/professor-cadastro.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';


const routes: Routes = [
  //aqui são configuradas as rotas do backend, primeiro parametro é a rota o segundo o componente que será mostrado
  {path:'professor', component: ProfessorListComponent},
  {path:'dar-aulas', component:ProfessorCadastroComponent},
  {path: 'aula', component:AulaComponentComponent},
  {path: 'aula/novo', component: AulaFormComponent},
  {path: 'aula/:id', component: AulaFormComponent},
  {path: 'horario-aula', component:HorarioListComponent},
  {path: 'horario-aula/novo', component: HorarioFormComponent},
  {path: 'horario-aula/:id', component: HorarioFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
