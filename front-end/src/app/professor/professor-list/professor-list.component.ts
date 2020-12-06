import { ProfessorService } from '../professor.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {


  professores: any = []  
  constructor(private professorSrv: ProfessorService) { }

  async ngOnInit(){
    this.professores = await this.professorSrv.listar()
    console.log(this.professores)
    
  }

}
