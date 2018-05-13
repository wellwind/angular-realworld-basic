import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArticlesService } from '../articles.service';

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

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {}

  search($event) {
    this.articlesService.searchArticles(this.keyword);
  }
}
