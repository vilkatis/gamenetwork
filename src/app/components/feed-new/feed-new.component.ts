import {Component, Input} from '@angular/core';
import {IAccount} from '../../models/IAccount';

@Component({
  selector: 'app-feed-new',
  templateUrl: 'feed-new.component.html',
  styleUrls: ['feed-new.component.scss']
})

export class FeedNewComponent {
  @Input() public account: IAccount;
}
