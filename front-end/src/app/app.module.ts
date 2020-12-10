import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorCadastroComponent } from './professor/professor-cadastro/professor-cadastro.component';
import { FormsModule } from '@angular/forms';
import { AulaComponentComponent } from './aula/aula-component/aula-component.component';
import { AulaFormComponent } from './aula/aula-form/aula-form.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { HorarioFormComponent } from './horario/horario-form/horario-form.component';
import { DisciplinasListComponent } from './disciplina/disciplinas-list/disciplinas-list.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    ProfessorListComponent,
    ProfessorCadastroComponent,
    AulaComponentComponent,
    AulaFormComponent,
    HorarioListComponent,
    HorarioFormComponent,
    DisciplinasListComponent,
    DisciplinaFormComponent,
    AlunoListComponent,
    AlunoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
