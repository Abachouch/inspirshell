import {Component, OnInit, HostBinding , Input } from '@angular/core';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html'
})


export class NavbarPanelComponent implements OnInit {

  @HostBinding('class.is-toggle') is_toggle = true;


  is_labels_visible = false;
  is_boards_visible = false ;
  is_board_visible = false ;

  @Input('data') data = 'hello menna' ;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.is_toggle = !this.is_toggle;
    console.log('toggled') ;
  }

  toggleLabelsPanel() {
    this.is_labels_visible = !this.is_labels_visible;
    this.is_boards_visible = false;
    this.is_board_visible = false ;
  }
  toggleBoardsPanel() {
    this.is_boards_visible = !this.is_boards_visible;
    this.is_labels_visible = false ;
  }
  toggleBoardPanel() {
    this.is_board_visible = !this.is_board_visible;
  }

}
