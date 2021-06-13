import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  public searchName: string = '';
  public status: string = 'all';

  constructor() {}

  @Input() searchFromCharacterList: string;
  @Input() countCharacterSearch: number;

  @Output() searchEvent = new EventEmitter();
  @Output() statusEvent = new EventEmitter();


  ngOnInit(): void {
    
  }

  searchCharacter(){
    this.searchEvent.emit(this.searchName)   
  }

  onKey(event){
    this.searchEvent.emit(event.target.value)
    console.log(event.target.value);
    
  }

  searchStatus(event){
    this.statusEvent.emit(event.value);
  }

  }



 

