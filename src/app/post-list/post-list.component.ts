import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() detailTitle: string;
  @Input() detailContent: string;
  @Input() detailLoveits: number;
  @Input() detailDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onValLoveit(){
    this.detailLoveits++;    
  }

  onValDloveit(){
    this.detailLoveits--; 
  }

}
