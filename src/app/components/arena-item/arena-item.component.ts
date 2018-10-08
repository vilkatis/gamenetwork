import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arena-item',
  templateUrl: 'arena-item.component.html',
  styleUrls: ['arena-item.component.scss']
})

export class ArenaItemComponent implements OnInit {
  @Input() public title: string;
  @Input() public date: string;
  @Input() public gameName: string;
  @Input() public platform: string;
  @Input() public region: string;
  @Input() public language: string;
  @Input() public players: {username: string, avatar: string}[];
  @Input() public playerCount: number;

  ngOnInit() {
  }
}
