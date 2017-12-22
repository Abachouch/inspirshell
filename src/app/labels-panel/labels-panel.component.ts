import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Label } from '../models/Label';
import {FakeData} from '../models/FakeData' ;

@Component({
  selector: 'app-labels-panel',
  templateUrl: './labels-panel.component.html'
})
export class LabelsPanelComponent {
  
  @Output()
onSelectLabel: EventEmitter<string> = new EventEmitter<string>();
  
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
  let fd = new FakeData();
  this.labels = fd.getLabels() ;
  }

  // this function will output the title when a label is selected
  selectLabel(title: string) {
     this.onSelectLabel.emit(title);
  }
}
