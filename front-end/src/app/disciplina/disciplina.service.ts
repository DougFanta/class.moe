import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private apiServer = environment.apiServer
  private apiUri : string = this.apiServer + 'disciplina'

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get(this.apiUri).toPromise()
  }

  novo(body:any){
    return this.http.post( this.apiUri ,body).toPromise()
  }

  obterUm(id : string) {
    return this.http.get(this.apiUri + '/' + id).toPromise()
  }

  atualizar(body : any) {
    return this.http.put(this.apiUri, body).toPromise()
  }
  
  excluir(id: string) {
    
    return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
  }

}
