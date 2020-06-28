import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
	constructor(public _newsService: NewsService) {}
	// public ngOnInit(): any {
	// 	this.belarusBankNews = this.activatedRoute.snapshot.data.news;
	// 	console.log(this.belarusBankNews)
	// 	for (const bbnews of this.belarusBankNews) {
	// 		bbnews.html_ru = bbnews.html_ru.replace(/<.*?>/gm, '');
	// 		bbnews.class = 'belarusBank';
	// 	}
	// 	this.news.push(...this.belarusBankNews);
	// 	this.news.sort((a: any, b: any) => {
	// 		return Date.parse(b.start_date) - Date.parse(a.start_date);
	// 	}),
	// 		this.news.map(
	// 			(e) => (
	// 				(e.id = this.newsId + 1), (this.newsId = this.newsId + 1)
	// 			)
	// 		);
	// 	// console.log(this.news)
	// }
}
