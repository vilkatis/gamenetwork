import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-strike',
  templateUrl: 'strike.component.html',
  styleUrls: ['strike.component.scss']
})

export class StrikeComponent implements OnInit {
  @Input() public text: string;
  constructor() {
  }

  ngOnInit() {
  }
}
