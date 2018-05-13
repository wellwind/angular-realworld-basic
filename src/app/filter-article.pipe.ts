import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {
  transform(articles: any[], keyword?: any): any {
    if (articles && keyword) {
      return articles.filter(article => article.title.indexOf(keyword) !== -1);
    } else {
      return articles;
    }
  }
}
