import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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




  ngOnInit() {
  }


  constructor() {

  }



}
