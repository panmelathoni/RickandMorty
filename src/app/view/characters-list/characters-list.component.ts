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

  

 @Input() search: string;
 
 //eventos de saida 
 @Output() countEvent = new EventEmitter();

  displayedColumns: string[] = ['name', 'status', 'image'];
  dataSource = new MatTableDataSource<MatCard>();
  


  @ViewChild(MatPaginator) paginator: MatPaginator;

  listaPersonagens: ListaPersonagemModel = new ListaPersonagemModel();

  public characterId;

  constructor(private personagensService: PersonagensService, private router: Router) {}


  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  
  ngOnInit(): void {
    this.listaPersonagens.info = new InfoModel();
    this.getPagedCharacters(this.pageIndex, "");

  }

  

  getPagedCharacters(pageNumber: number, name: string) {
    this.personagensService.getPagedCharacters(pageNumber, name).subscribe(
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
    
    this.getPagedCharacters(event.pageIndex +1, this.searchContent)
   console.log(name);
   
   
    
  }

  moreInfo(id : number){
    console.log(id, "moreInfo");
      this.router.navigate(['/moreInfo', id]);
  
    
  }

  mustSearchFor(name)
  {
    this.searchContent = name;
    
    this.getPagedCharacters(this.pageIndex, name);

    console.log("must search from app ", this.searchContent);
  }


}


