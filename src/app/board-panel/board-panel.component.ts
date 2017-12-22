import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../models/Board';

@Component({
  selector: 'app-board-panel',
  template: `<h1 class="panel-header" >{{board.title}}</h1>
            <p class="board-description" >{{board.size}}</p>`
})
export class BoardPanelComponent implements OnInit {

  @Input() 
    board: Board;

  constructor() { }

  ngOnInit() {
  }

}
