import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../models/blogpost';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  @Input() post: BlogPost;

  constructor() {}

  ngOnInit(): void {}
}
