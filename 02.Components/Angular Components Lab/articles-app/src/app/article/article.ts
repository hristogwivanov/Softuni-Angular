import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {

}

export class ArticleComponent{
  private symbols: number = 250; 
  @Input() article: Article; 
  @input() articleDesc: string;
  descToShow : string;
  articleDescLen : number;
  showReadMoreBtn : boolean = true;
  showHideBtn : boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
  }
}