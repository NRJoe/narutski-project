import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsComponent } from '../news.component';

@Component({
	selector: 'app-news-item',
	templateUrl: './news-item.component.html',
	styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
	constructor(
		public _activatedRoute: ActivatedRoute,
		public _news: NewsComponent
	) {
		this._activatedRoute.params.subscribe((params: any) => {
			console.log(params);
			_news.newsId = params.id;
		});
	}
}
