import { Component, Input , OnChanges } from '@angular/core';
import { LabelsPanelComponent } from '../labels-panel/labels-panel.component';
import { FakeData } from '../models/FakeData';
import { Label } from '../models/Label';
import { Item } from '../models/Item';
import { Board } from '../models/Board';



@Component({
  selector: 'app-content-panel',
  template: `<p>type: {{type}} </p>
             <p>title: {{title}} </p>
            <ul class="till">
             <li class="item"  *ngFor="let i of filtred" > <app-image-item [item]="i"></app-image-item> </li>
            </ul> `
})
export class ContentPanelComponent implements OnChanges{

 
  

  
filtred = [] ;
  
  @Input()
  type: string;
@Input()
  title: string;
  // construnctor
  constructor() {
  
  }
  
  
  ngOnChanges() {
    switch(this.type){
      case 'all' :this.getAllFromDatabase() ; break ;
      case 'label' : this.getLabelFromDatabase(this.title) ; break ;
      case 'board' : this.getBoardFromDatabase(this.title) ; break ;
      default : this.filtred = [] ;
    
    }
//    this.filtred = this.data.filter(data  => data.type === this.type) ;
//  console.log(this.filtred) ;   
  }
  
getAllFromDatabase(){

  let fq = new FakeData() ;
  this.filtred = fq.getItems() ;
  
}
getLabelFromDatabase(label:string){
  let fq = new FakeData() ;
  this.filtred = fq.getItemByLabel(label);
  console.log(this.filtred) ;
}
getBoardFromDatabase(board:string){
  let fq = new FakeData() ;
  this.filtred = fq.getItemByBoard(board) ;
  console.log(this.filtred) ;
}

}
