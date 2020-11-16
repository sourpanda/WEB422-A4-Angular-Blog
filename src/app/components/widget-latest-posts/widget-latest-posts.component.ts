import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blogpost';

@Component({
  selector: 'app-widget-latest-posts',
  templateUrl: './widget-latest-posts.component.html',
  styleUrls: ['./widget-latest-posts.component.css'],
})
export class WidgetLatestPostsComponent implements OnInit {
  @Input() posts: BlogPost;
  constructor() {}

  ngOnInit(): void {}
}
