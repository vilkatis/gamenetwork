import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arena-item',
  templateUrl: 'arena-item.component.html',
  styleUrls: ['arena-item.component.scss']
})

export class ArenaItemComponent implements OnInit {
  @Input() public username: string;
  @Input() public avatar: string;
  @Input() public activity?: { name: string, action: string };
  @Input() public text?: string;
  @Input() public image?: string;

  ngOnInit() {
  }
}
