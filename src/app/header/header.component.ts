import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = '';

  highlightTitle = false;
  fontSize = 24;

  constructor() { }

  ngOnInit() {
  }

  search($event) {
    console.log($event);

    this.highlightTitle = !this.highlightTitle;
    ++this.fontSize;
  }
}
