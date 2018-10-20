import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {IPost} from '../../models/IPost';

@Component({
  selector: 'app-feed-item',
  templateUrl: 'feed-item.component.html',
  styleUrls: ['feed-item.component.scss']
})

export class FeedItemComponent implements OnInit {
  @Input() public post: IPost;

  ngOnInit() {
  }
}
