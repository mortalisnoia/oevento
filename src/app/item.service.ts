import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class itemService {

//itensUrl = 'http://localhost:8080/itens';
  itensUrl = 'https://cryptic-shore-98814.herokuapp.com/itens';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.itensUrl);
  }

  adicionar(item: any){
    return this.http.post(this.itensUrl, item);
  }

  
}
