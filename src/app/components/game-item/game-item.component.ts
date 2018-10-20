import { Component, Input } from '@angular/core';
import { ISession } from '../../models/ISession';

@Component({
  selector: 'app-arena-item',
  templateUrl: 'game-item.component.html',
  styleUrls: ['game-item.component.scss']
})

export class GameItemComponent {
  @Input() public game: ISession;

  public arrayOf(n: number) {
    return Array(5 - n);
  }
}
