import { Component, OnInit, ViewChild } from '@angular/core';

import { CharactersListComponent } from '../characters-list/characters-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public search;
  public count;
  public status;
  
  //estuda isso!!!!
  @ViewChild(CharactersListComponent) characterComponentChild :CharactersListComponent;
  constructor() { }

  ngOnInit(): void {
  }

  updateSearch(event){
    this.search = event;
    console.log("updateSearch", event);
    //preste atencao que isso basicamente substitui o que fizemos com os eventos
    //mas geralmente eh usado quando queremos chamar metodos dos componentes e
    //nao passar eventos e inputs entre eles
    this.characterComponentChild.searchContent = event;
    this.characterComponentChild.mustSearchFor()
  }
  
  updateCount(event){
    this.count = event
    console.log("updateCount", event);
  
  }

  updateStatus(event) {
    this.status = event;
    this.characterComponentChild.statusContent = event;
    this.characterComponentChild.mustSearchFor()
  }

}








