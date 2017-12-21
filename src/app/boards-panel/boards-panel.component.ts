import { Component, OnInit } from '@angular/core';
import { Board } from '../models/Board';

@Component({
  selector: 'app-boards-panel',
  templateUrl: './boards-panel.component.html',
  styleUrls: ['./boards-panel.component.scss']
})
export class BoardsPanelComponent implements OnInit {

  boards: Board[] = new Array;
  selectedBoard: Board = null;
  sommeData = 'it works baby ';
  constructor() {
    this.boards.push(new Board('Un example of project', 74));
    this.boards.push(new Board('My First Project', 12));
    this.boards.push(new Board('Other Board', 32));
  }
  ngOnInit() {
  }
  selectBoard(board: Board) {
    this.selectedBoard = board;
  }
  textSizing(text: string) {
    return (text.length > 12) ? text.substr(0, 12) + '..' : text;
  }
}
