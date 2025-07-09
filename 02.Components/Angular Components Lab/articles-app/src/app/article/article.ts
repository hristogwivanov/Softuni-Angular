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

  readMore():void{
    this.articleDescLen+=this.symbols;
    if(this.articleDescLen >= this.articleDesc.length){
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }
    if(this.articleDescLen < this.articleDesc.length){
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage():void{
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
  }

  hideDesc(){
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

}