import { Component, OnInit } from '@angular/core';
import { Board } from '../models/Board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: Board[] = new Array();

  constructor() { }

  ngOnInit() {
    this.boards.push(new Board('FIRST BOARD')) ;
    this.boards.push(new Board('second board')) ;
    this.boards.push(new Board('third board')) ;
    this.boards.push(new Board('forth board')) ;
  }

}
