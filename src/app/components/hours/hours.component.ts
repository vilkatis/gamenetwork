import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-hours',
  templateUrl: 'hours.component.html',
  styleUrls: ['hours.component.scss']
})

export class HoursComponent {
  @Input() public title: string;
  public start: Moment = moment('2016-10-02 00:00', 'YYYY-MM_DD HH:mm');
  public end: Moment = moment('2016-10-02 24:00', 'YYYY-MM_DD HH:mm');

  public prettify(num: number) {
    return moment(num, 'x').format('HH:mm A');
  }
}
