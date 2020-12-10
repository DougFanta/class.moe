import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AulaService } from '../aula.service';

@Component({
  selector: 'app-aula-component',
  templateUrl: './aula-component.component.html',
  styleUrls: ['./aula-component.component.scss']
})
export class AulaComponentComponent implements OnInit {

  aulas: any = []
  displayedColumns: string[] = ['disciplina', 'professor', 'aluno','editar', 'excluir']   
  constructor(private aulaSrv: AulaService,
    private snackBar : MatSnackBar) { }


  async ngOnInit(){
    this.aulas = await this.aulaSrv.listar()
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.aulaSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'OK', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }
  

}


