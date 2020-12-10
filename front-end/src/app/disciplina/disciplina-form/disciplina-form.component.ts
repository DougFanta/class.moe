import { DisciplinaService } from './../disciplina.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.scss']
})
export class DisciplinaFormComponent implements OnInit {
  disciplina: any = {}
  title : string = 'Nova Disciplina'
  disciplinas: any = []
  constructor(private disciplinaSrv: DisciplinaService,
    private location : Location,
    private snackBar : MatSnackBar,
    private actRoute : ActivatedRoute) { }

    async ngOnInit(){
      if(this.actRoute.snapshot.params['id']) {
        try {
          // 1) Acionar o back-end para buscar esse registro
          // e disponibilizá-lo para edição        
          this.disciplina = await this.disciplinaSrv.obterUm(this.actRoute.snapshot.params['id'])
          // 2) Mudar o título da página
          this.title = 'Editando disciplina'
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
          if(this.disciplina._id) {
            await this.disciplinaSrv.atualizar(this.disciplina) // Atualização
          }
          else {
            await this.disciplinaSrv.novo(this.disciplina)
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
