import { Component, OnInit , Input } from '@angular/core';
import {Item} from '../models/Item' ;

@Component({
  selector: 'app-image-item',
  template: `
    <figure>
      <img [src]="item.url" [alt]="item.title">
  <figcaption>{{item.description}}</figcaption>
    </figure>
    `
})
export class ImageItemComponent implements OnInit {

  @Input('item') item:Item ;
  constructor() { }
  ngOnInit() {
  }
}
