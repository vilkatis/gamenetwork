import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }
}
