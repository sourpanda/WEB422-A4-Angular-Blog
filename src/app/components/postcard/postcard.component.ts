import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blogpost';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css'],
})
export class PostcardComponent implements OnInit {
  @Input() post: BlogPost;
  constructor() {}

  ngOnInit(): void {}
}
