import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  list: any[] = [];
  keyword = '';

  constructor(private httpClient: HttpClient) {}

  loadArticles() {
    this.httpClient.get('https://conduit.productionready.io/api/articles').subscribe((response: any) => {
      this.list = response.articles;
    });
  }

  getArticles(): Observable<any[]> {
    return this.httpClient.get('https://conduit.productionready.io/api/articles').pipe(map((response: any) => response.articles));
  }

  searchArticles(keyword: string) {
    this.keyword = keyword;
  }
}
