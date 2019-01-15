import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() loveStatus: number;
  @Input() postTitle: string;
  @Input() postMessage: string;

  constructor() { }

  ngOnInit() {
  }

plus1(){
  this.loveStatus += 1;
}

min1(){
  this.loveStatus -= 1;
}
}
