import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {

  @Input() image?: string;
  @Input() text?: string;

}
