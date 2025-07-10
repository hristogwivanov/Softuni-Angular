import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data/data';
import { Article, ArticleComponent } from '../article/article';

@Component({
  selector: 'app-articles',
  imports: [ArticleComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css'
})

export class ArticlesComponent implements OnInit {
  articles! : Article[];

  constructor() { }

  ngOnInit(){
    this.articles = new ArticleData().getData();
  }
}
