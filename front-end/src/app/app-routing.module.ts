import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AulaComponentComponent } from './aula/aula-component/aula-component.component';
import { AulaFormComponent } from './aula/aula-form/aula-form.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { DisciplinasListComponent } from './disciplina/disciplinas-list/disciplinas-list.component';
import { HorarioFormComponent } from './horario/horario-form/horario-form.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { ProfessorCadastroComponent } from './professor/professor-cadastro/professor-cadastro.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';


const routes: Routes = [
  //aqui são configuradas as rotas do backend, primeiro parametro é a rota o segundo o componente que será mostrado
  {path:'professor', component: ProfessorListComponent},
  {path:'dar-aulas', component:ProfessorCadastroComponent},
  {path:'aula', component:AulaComponentComponent},
  {path:'aula/novo', component: AulaFormComponent},
  {path:'aula/:id', component: AulaFormComponent},
  {path:'horario-aula', component:HorarioListComponent},
  {path:'horario-aula/novo', component: HorarioFormComponent},
  {path:'horario-aula/:id', component: HorarioFormComponent},
  {path:'disciplina', component:DisciplinasListComponent},
  {path:'disciplina/novo', component:DisciplinaFormComponent},
  {path:'disciplina/:id', component: DisciplinaFormComponent},
  {path:'aluno', component:AlunoListComponent},
  {path:'aluno/novo', component:AlunoFormComponent},
  {path:'aluno/:id', component:AlunoFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
