import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../models/Board';

@Component({
  selector: 'app-board-panel',
  templateUrl: './board-panel.component.html',
  styleUrls: ['./board-panel.component.scss']
})
export class BoardPanelComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  ngOnInit() {
  }

}
