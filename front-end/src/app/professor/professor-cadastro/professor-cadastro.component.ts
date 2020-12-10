import { ProfessorService } from '../professor.service';
import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../disciplina/disciplina.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.scss']
})
export class ProfessorCadastroComponent implements OnInit {

  professor: any = {}
  disciplinas: any = []  
  constructor(
    private disciplinaSrv: DisciplinaService, 
    private professorSrv: ProfessorService,
    private location : Location,
    private snackBar : MatSnackBar) { }
  
  async ngOnInit(){

    this.carregarDados()
  
  }

  async carregarDados() {
    try {
      this.disciplinas = await this.disciplinaSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    console.log(this.professor)
    //return
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o professor já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.professor._id) {
          await this.professorSrv.atualizar(this.professor) // Atualização
        }
        else {
          await this.professorSrv.novo(this.professor)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'OK',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'OK!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}
