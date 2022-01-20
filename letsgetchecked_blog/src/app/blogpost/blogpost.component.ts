import { Component, Input, OnInit } from '@angular/core';
import { Blogpost } from '../models/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
  @Input() blogpost: Blogpost | null = null;
  @Input() showDetails: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
