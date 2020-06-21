import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import News from 'src/models/news';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
	public belarusBankNews: News[] = [];
	public news: any[] = [];
	public newsId: number = 0;

	public config: any;
	public collection: any = { count: 30, data: [] };

	public p: number = 1;

	constructor(public _newsService: NewsService) {
		this._newsService
			.loadBelarusBankNews()
			.subscribe((belarusBankNews: News[]) => {
				this.belarusBankNews = belarusBankNews;
				this.collection.data = this.belarusBankNews;
				this.belarusBankNews[
					this.newsId
				].html_ru = this.belarusBankNews[this.newsId].html_ru.replace(
					/<.*?>/gm,
					''
				);
				console.log(this.belarusBankNews[this.newsId].html_ru);
			});
		this.config = {
			itemsPerPage: 5,
			currentPage: 1,
			totalItems: this.collection.count,
		};
	}
	public JSONtoHTML(text: string): string {
		return (text = text.replace(/<.*?>/gm, ''));
	}
	public pageChanged(event: any): any {
		this.config.currentPage = event;
	}
}
