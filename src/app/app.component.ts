import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';

  list: any[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articlesService
      .getArticles()
      .subscribe(articles => {
        this.list = articles;
      });
  }
}
