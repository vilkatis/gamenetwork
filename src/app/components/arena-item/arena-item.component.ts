import {Component, Input, OnInit} from '@angular/core';
import {IGame} from '../../models/game.model';

@Component({
  selector: 'app-arena-item',
  templateUrl: 'arena-item.component.html',
  styleUrls: ['arena-item.component.scss']
})

export class ArenaItemComponent implements OnInit {
  @Input() public game: IGame;

  ngOnInit() {
  }
}
