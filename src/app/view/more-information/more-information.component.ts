import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonagemModel } from 'src/app/model/personagem.model';
import { PersonagensService } from 'src/app/personagens.service';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {

  public characterId;
  public episodeNumbers: string [] = []; 
  public statusCharacter: string;

  
  personagens: PersonagemModel = new PersonagemModel();
  

  
  constructor(private personagensService: PersonagensService, 
    private router: Router, 
    private activedRoute: ActivatedRoute
   ) { }

  ngOnInit(): void {
   this.characterId= this.activedRoute.snapshot.params['id']
    console.log((this.characterId));   

    this.getSingleCharacter(this.characterId);


  }


  getSingleCharacter(id: number){
    this.personagensService.getSingleCharacter(id).subscribe(
      (data)=> {
        this.personagens = data
        console.log(data);
        data.episode.forEach(element => {
          let episodeName= element.substring(element.length-2).includes("/") 
          ? element.substring(element.length-1)
          : element.substring(element.length-2)
          this.episodeNumbers.push(episodeName);
          console.log("episodio", episodeName);
        });
       this.personagens.episode = this.episodeNumbers;
      },
      (err) => {
        console.log('Erro ao buscar personagens', err);
      }
    );
  }

 
  backHome(){
    this.router.navigate(['']);
  }

  cleanBtn(){
    this.router.navigate(['searchCharacters']);

  }

}
