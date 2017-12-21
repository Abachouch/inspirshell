import { Component, OnInit } from '@angular/core';
import { Label } from '../models/Label';

@Component({
  selector: 'app-labels-panel',
  templateUrl: './labels-panel.component.html',
  styleUrls: ['./labels-panel.component.scss']
})
export class LabelsPanelComponent implements OnInit {

  labels: Label[] = new Array();

  constructor() {
    this.getLabels();
   }

  ngOnInit() {
  }
  textSizing(text: string) {
    return (text.length > 12) ? text.substr(0, 12) + '..' : text;
  }

  getLabels() {
    this.labels.push(new Label('Sport', 5));
    this.labels.push(new Label('Programming', 25));
    this.labels.push(new Label('Dancing', 32));
    this.labels.push(new Label('Gaming', 789));
    this.labels.push(new Label('somme long text', 789));
    this.labels.push(new Label('other realy long text ', 789));
  }

}
