import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';

  list$: Observable<any[]>;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.list$ = this.articlesService.getArticles();
  }
}
