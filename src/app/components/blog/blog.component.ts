import { Component, OnInit } from '@angular/core';
import blogData from '../../blogData.json';
import { BlogPost } from '../../models/blogpost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> = blogData;
  constructor() {}

  ngOnInit(): void {}
}
