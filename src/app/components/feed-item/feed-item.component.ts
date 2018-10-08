import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: 'feed-item.component.html',
  styleUrls: ['feed-item.component.scss']
})

export class FeedItemComponent implements OnInit {
  @Input() public username: string;
  @Input() public avatar: string;
  @Input() public activity?: { name: string, action: string };
  @Input() public text?: string;
  @Input() public image?: string;

  ngOnInit() {
  }
}
