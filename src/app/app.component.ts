import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Label} from './models/Label' ;


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger(
      'slidPanel',
      [
        transition(
          ':enter', [
            style({ width: '0', opacity: 0 }),
            animate('200ms', style({ width: '200px', 'opacity': 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ width: '200px', 'opacity': 1 }),
            animate('200ms', style({ width: '0', 'opacity': 0 }),
            )]
        )]
    )
  ]
})

export class AppComponent implements OnInit {
// type => can be : bord|label|all|
  type = 'all' ;
  // title => is the title of selected borr|label.
title :string ;
  ngOnInit() {
  }

  constructor() {
  }
  
  labelIsSelected(label : string){
    this.type = 'label';
    this.title = label ;
  }
  boardIsSelected(board : string){
    this.type = 'board' ;
    this.title = board ;
  }

}
