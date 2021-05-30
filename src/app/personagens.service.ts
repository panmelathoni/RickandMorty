import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPersonagemModel } from './model/listapersonagens.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private http: HttpClient) { }


  //Buscar todos os personagens

  getPagedCharacters(pageNumber: number, name: string): Observable<ListaPersonagemModel>{
    console.log(pageNumber, "pageNumber");
    let urlComplement = name !== "" ? "&name=" + name : "";
 
   return this.http.get<ListaPersonagemModel>(`https://rickandmortyapi.com/api/character?page=${pageNumber}${urlComplement}`)
  }

}

 