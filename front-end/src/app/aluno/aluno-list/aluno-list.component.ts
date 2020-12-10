import { AlunoService } from './../../aula/aluno.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  alunos: any = []
  displayedColumns: string[] = ['nome','email','editar', 'excluir']
  constructor(private disciplinaSrv: AlunoService,
    private snackBar : MatSnackBar ) { }

  async ngOnInit(){
    this.alunos = await this.disciplinaSrv.listar()
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.disciplinaSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'OK', {
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
