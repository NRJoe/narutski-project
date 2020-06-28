import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
	selector: 'app-news-item',
	templateUrl: './news-item.component.html',
	styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
	constructor(
		public _activatedRoute: ActivatedRoute,
		public _news: NewsService
	) {
		this._activatedRoute.params.subscribe((params: any) => {
			_news.newsId = params.id;
		});
	}
}
