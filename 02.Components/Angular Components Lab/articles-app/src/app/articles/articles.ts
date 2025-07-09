import { Component } from '@angular/core';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.html',
  styleUrl: './articles.css'
})
export class ArticlesComponent implements OnInit {
  articles : Article[];

  constructor() { }

  ngOnInit(){
    this.articles = new ArticleData().getData();
  }
}
