  import {Label} from './Label' ;
  import {Board} from './Board' ;


export class Item{
  
url:string ; 
title:string; 
description:string ;
colors:string[] ;
board:Board;
label:Label ;
  
constructor(url:string , title:string, description:string , board:Board ,label:Label){
 this.url = url ;
 this.title = title ; 
 this.description = description ;
 this.board = board ;
 this.label = label ;
 }
  
}
