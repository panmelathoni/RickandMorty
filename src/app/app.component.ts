import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CharactersListComponent } from './view/characters-list/characters-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickandMorty';

  public search;
  public count;

  //estuda isso!!!!
  @ViewChild(CharactersListComponent) characterComponentChild :CharactersListComponent;


  updateSearch(event){
    this.search = event;
    console.log("updateSearch", event);
    //preste atencao que isso basicamente substitui o que fizemos com os eventos
    //mas geralmente eh usado quando queremos chamar metodos dos componentes e
    //nao passar eventos e inputs entre eles
    this.characterComponentChild.mustSearchFor(event)
  }

  updateCount(event){
    this.count = event
    console.log("updateCount", event);

  }
}
