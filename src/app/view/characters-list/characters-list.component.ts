import { AfterViewInit, Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { InfoModel } from 'src/app/model/info.model';
import { ListaPersonagemModel } from 'src/app/model/listapersonagens.model';
import { PersonagensService } from 'src/app/personagens.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit, AfterViewInit  {

  public pageIndex = 1;

  public searchContent = "";
  public statusContent = "all";

  

 @Input() search: string;
 @Input() status: string;
 
 //eventos de saida 
 @Output() countEvent = new EventEmitter();

  displayedColumns: string[] = ['name', 'status', 'image'];
  dataSource = new MatTableDataSource<MatCard>();
  


  @ViewChild(MatPaginator) paginator: MatPaginator;

  listaPersonagens: ListaPersonagemModel = new ListaPersonagemModel();

  public characterId;
  public characterStatus;

  constructor(private personagensService: PersonagensService, private router: Router) {}


  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  
  ngOnInit(): void {
    this.listaPersonagens.info = new InfoModel();
    this.getPagedCharacters(this.pageIndex, "", "");

  }

  

  getPagedCharacters(pageNumber: number, name: string, status: string) {
    this.personagensService.getPagedCharacters(pageNumber, name, status).subscribe(
      (personagens) => {
       
        
        this.listaPersonagens = personagens;
        setTimeout( () => {this.countEvent.emit(this.listaPersonagens.info.count);}, 1000);
        
      },
      (err) => {
        console.log('Erro ao buscar personagens', err);
      }
    );
  }


  getServerData(event){
    
    this.getPagedCharacters(event.pageIndex +1, this.searchContent, this.statusContent)
   console.log(name, status);
   
   
    
  }

  moreInfo(id : number){
    console.log(id, "moreInfo");
      this.router.navigate(['/moreInfo', id]);
  
    
  }

  mustSearchFor()
  {
    this.getPagedCharacters(this.pageIndex, this.searchContent, this.statusContent);
  }
}


