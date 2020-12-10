import { AulaService } from './../aula.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisciplinaService } from 'src/app/disciplina/disciplina.service';
import { ProfessorService } from 'src/app/professor/professor.service';
import { Location } from '@angular/common';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aula-form',
  templateUrl: './aula-form.component.html',
  styleUrls: ['./aula-form.component.scss']
})
export class AulaFormComponent implements OnInit {
  professores: any = []
  alunos: any = []
  disciplinas: any = []
  aula: any  = {}
  title : string = 'Nova Aula'

  
  

  constructor(
    private aulaSrv:AulaService,
    private disciplinaSrv: DisciplinaService, 
    private professorSrv: ProfessorService,
    private alunoSrv: AlunoService,
    private location : Location,
    private snackBar : MatSnackBar,
    private actRoute : ActivatedRoute) { }

  async ngOnInit(){
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.aula = await this.aulaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando aula'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }  

    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.alunos = await this.alunoSrv.listar()
      this.professores = await this.professorSrv.listar()
      this.disciplinas = await this.disciplinaSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }


  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o professor já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.aula._id) {
          await this.aulaSrv.atualizar(this.aula) // Atualização
        }
        else {
          await this.aulaSrv.novo(this.aula)
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
