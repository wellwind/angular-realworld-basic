import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() keywordChange = new EventEmitter<string>();

  keyword = '';

  highlightTitle = false;
  fontSize = 24;


  constructor() { }

  ngOnInit() {

  }

  search($event) {
    this.keywordChange.emit(this.keyword);
  }
}
