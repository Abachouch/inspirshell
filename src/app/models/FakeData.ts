import { Label } from './Label';
import { Board } from './Board';
import { Item } from './Item';

export class FakeData {
  labels: Label[] = new Array();
  boards: Board[] = new Array();
  items: Item[] = new Array();

  constructor() {
    //
    this.labels.push(new Label('Sport', 5));
    this.labels.push(new Label('Programming', 25));
    this.labels.push(new Label('Dancing', 32));
    this.labels.push(new Label('Gaming', 789));
    this.labels.push(new Label('somme long text', 789));
    this.labels.push(new Label('other realy long text ', 789));
    //
    this.boards.push(new Board('Un example of project', 74));
    this.boards.push(new Board('My First Project', 12));
    this.boards.push(new Board('Other Board', 32));
    //
    this.items.push(new Item('./assets/article1.jpg', 'title1', 'desc 1 b0 l0', this.boards[0], this.labels[0]));
    this.items.push(new Item('./assets/article2.jpg', 'title2', 'desc 2 b1 l1', this.boards[1], this.labels[1]));
    this.items.push(new Item('./assets/article3.jpg', 'title3', 'desc 3 b2 l2', this.boards[2], this.labels[2]));
    this.items.push(new Item('./assets/article4.gif', 'title4', 'desc 4 b1 l3', this.boards[1], this.labels[3]));
    this.items.push(new Item('./assets/article5.gif', 'title5', 'desc 5 b2 l1', this.boards[2], this.labels[1]));
    this.items.push(new Item('./assets/article6.png', 'title6', 'desc 6 b2 l2', this.boards[2], this.labels[2]));
    
  }

  getLabels(): Label[] {
    
    return this.labels;
  }
  getBoards(): Board[] {
    
    return this.boards;
  }
  getItems(): Item[] {
    return this.items;
  }
  getItemByLabel(label: string): Item[] {
    console.log('filter by label : '+label) ;
    return this.items.filter(itm => itm.label.title === label) ;
  }

  getItemByBoard(board: string): Item[] {
    console.log('filter by board : '+board) ;
    return this.items.filter(itm => itm.board.title === board ) ;
  }
}