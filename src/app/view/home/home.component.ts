import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  public search: string = '';

  public status: string;

  
  constructor() {}

  @Input() searchFromCharacterList: string;
  @Input() countCharacterSearch: number;

  @Output() searchEvent = new EventEmitter();


  ngOnInit(): void {
    
  }

  searchCharacter(){
    this.searchEvent.emit(this.search)
    console.log("click btn", this.search);
   
  }

  onKey(event){
    this.searchEvent.emit(event.target.value)
    console.log(event.target.value);
    
  }

  
  }



 

