import { Component, OnInit , Input , HostBinding} from '@angular/core';
import { Board } from '../models/Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input('board') board: Board;
  @HostBinding('class.item') cssItem = 'item' ;
  @HostBinding('class.float-left') cssFloatLeft = 'float-left' ;
  // @HostBinding('style.max-width') cssCardWidth = '20rem' ;
  constructor() { }

  ngOnInit() {
    this.board.color = '#BADA55';
    this.board.thumb = 'assets/article1.jpg';
    this.board.lenght = 5;
  }

}
