import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplinas-list',
  templateUrl: './disciplinas-list.component.html',
  styleUrls: ['./disciplinas-list.component.scss']
})
export class DisciplinasListComponent implements OnInit {
  disciplinas: any = []
  displayedColumns: string[] = ['disciplina','area','editar', 'excluir']
  constructor(private disciplinaSrv: DisciplinaService,
    private snackBar : MatSnackBar ) { }

  async ngOnInit(){
    this.disciplinas = await this.disciplinaSrv.listar()
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
