import { Component, Output , EventEmitter } from '@angular/core';
import { Board } from '../models/Board';
  import { FakeData } from '../models/FakeData'; 

@Component({
  selector: 'app-boards-panel',
  templateUrl: './boards-panel.component.html'
})

export class BoardsPanelComponent {
  
  @Output()
  onSelectBoard: EventEmitter<string> = new EventEmitter<string>()

  boards: Board[] = new Array;
  
  constructor() {
    let fd = new FakeData();
    this.boards = fd.getBoards() ;
  }
  
selectBoard(title : string) {
  this.onSelectBoard.emit(title) ;
  }
  textSizing(text: string) {
    return (text.length > 12) ? text.substr(0, 12) + '..' : text;
  }
}
