import { Location } from '@angular/common';
import { ProfessorService } from 'src/app/professor/professor.service';
import { HorarioService } from './../horariosAulas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-horario-form',
  templateUrl: './horario-form.component.html',
  styleUrls: ['./horario-form.component.scss']
})
export class HorarioFormComponent implements OnInit {

  title : string = 'Nova Aula'
  horarios: any = []
  horario: any = {}
  professores: any = []
  constructor(
    private horarioSrv:HorarioService,
    private professorSrv:ProfessorService,
    private location : Location,
    private snackBar : MatSnackBar,
    private actRoute : ActivatedRoute) { }

  async ngOnInit(){
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.horario = await this.horarioSrv.obterUm(this.actRoute.snapshot.params['id'])
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
      this.horarios = await this.horarioSrv.listar()
      this.professores = await this.professorSrv.listar()
      
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
        if(this.horario._id) {
          await this.horarioSrv.atualizar(this.horario) // Atualização
        }
        else {
          await this.horarioSrv.novo(this.horario)
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
