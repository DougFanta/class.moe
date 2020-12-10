import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HorarioService } from '../horariosAulas.service';


@Component({
  selector: 'app-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.scss']
})
export class HorarioListComponent implements OnInit {

  horarios: any = []
  displayedColumns: string[] = ['professor', 'dia','disponibilidade','editar', 'excluir']   
  constructor(private horarioSrv: HorarioService,
    private snackBar : MatSnackBar,
    ) { }


  async ngOnInit(){
    this.horarios = await this.horarioSrv.listar()
    console.log(this.horarios)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.horarioSrv.excluir(id)
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
